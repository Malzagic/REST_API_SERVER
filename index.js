import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import bodyParser from "body-parser";
import { homeRoute } from "./src/routes/serverSite/home-route.js";
import { portfolioRoutes } from "./src/routes/portfolio/portfolio-routes.js";
import { contactRoutes } from "./src/routes/portfolio/contact-routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// STARTING POINT
const app = express();
const port = process.env.PORT || 8000;

// ROUTES
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", homeRoute);

app.use("/api/portfolio", portfolioRoutes);

app.use("/api/contact", contactRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "views", "index.ejs"));
});

app.listen(port, () => {
  console.log(`Server is started on port: ${port}`);
});
