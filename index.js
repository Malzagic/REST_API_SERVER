import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import { portfolioRoutes } from "./routes/portfolio/portfolio-routes.js";
import { contactRoutes } from "./routes/portfolio/contact-routes.js";

// STARTING POINT
const app = express();
const port = process.env.PORT || 8000;

// ROUTES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join("public")));

app.use("/api/portfolio", portfolioRoutes);

app.use("/api/contact", contactRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is started on port: ${port}`);
});
