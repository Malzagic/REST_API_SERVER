import express from "express"
import nodemailer from "nodemailer";
import { emailValidation } from "../../controllers/email.controller.js";
import 'dotenv/config';


// EXPRESS
const router = express.Router();

// .ENV
const user = process.env.GMAIL_USER;
const password = process.env.GMAIL_PASSWORD;



const contactRoutes = router.post('/', async (req, res) => {
    const body = req.body;

    const validBodyForm = await emailValidation(body);

    console.log(validBodyForm)
    if (validBodyForm.validation === false) {
        return res.status(200).send(validBodyForm);
    } else {
        // Process the form data, send emails, or perform any necessary actions here
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: password,
            }
        });

        const mailOptions = {
            from: body.email,
            to: user, // for now i will set fake email
            subject: `Message from ${body.email}`,
            text: body.message,
        }


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.send({ message: error });
            }
        })

        res.status(200).json({ message: 'Email sent successfully' });
    }
});


export { contactRoutes }