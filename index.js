import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { portfolioRoutes } from "./src/routes/portfolio/portfolio-routes.js";
import { contactRoutes } from "./src/routes/portfolio/contact-routes.js";

// STARTING POINT
const app = express();
const port = process.env.PORT || 8000;

// ROUTES

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello!")
})

app.use('/portfolio', portfolioRoutes);

app.use('/contact', contactRoutes);


app.listen(port, () => {
    console.log(`Server is started on port: ${port}`)
});