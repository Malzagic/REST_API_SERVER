import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { homeRoute } from "./src/routes/serverSite/home-route.js";
import { portfolioRoutes } from "./src/routes/portfolio/portfolio-routes.js";
import { contactRoutes } from "./src/routes/portfolio/contact-routes.js";

// STARTING POINT
const app = express();
const port = process.env.PORT || 8000;



// ROUTES
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // You can also set more headers as needed, such as methods and headers
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

app.use("/", homeRoute);

app.use("/api/portfolio", portfolioRoutes);

app.use("/api/contact", contactRoutes);


app.listen(port, () => {
    console.log(`Server is started on port: ${port}`)
});