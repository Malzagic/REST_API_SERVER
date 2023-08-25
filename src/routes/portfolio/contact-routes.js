import express from "express"
import nodemailer from "nodemailer";
import 'dotenv/config';


// EXPRESS
const router = express.Router();

// .ENV
const password = process.env.GMAIL_PASSWORD;



const contactRoutes = router.post('/', (req, res) => {
    const body = req.body;

    // Process the form data, send emails, or perform any necessary actions here
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'przemek2142@gmail.com',
            pass: password,
        }
    });

    const mailOptions = {
        from: body.email,
        to: 'przemek2142@gmail.com',
        subject: `Message from ${body.email}`,
        text: body.message,
    }


    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.send({message: 'error'});
        } else {
            res.send({message: 'Success!'})
        }
    })

    res.status(200).json({ message: 'Email sent successfully' });
});


export { contactRoutes }