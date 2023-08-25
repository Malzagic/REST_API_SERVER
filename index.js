import express from "express";
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url";

import 'dotenv/config';
import cors from "cors";
import bodyParser from "body-parser";
import ejs from "ejs";
import { portfolioRoutes } from "./src/routes/portfolio/portfolio-routes.js";
import { contactRoutes } from "./src/routes/portfolio/contact-routes.js";

// STARTING POINT
const app = express();
const port = process.env.PORT || 8000;

const __dirname = dirname(fileURLToPath(import.meta.url));

// ROUTES
app.use(express.static(path.join(__dirname, '/public/')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.use('/portfolio', portfolioRoutes);

app.use('/contact', contactRoutes);


app.listen(port, () => {
    console.log(`Server is started on port: ${port}`)
});