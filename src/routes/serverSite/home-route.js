import express from "express";
import ejs from "ejs";

const router = express.Router();

const homeRoute = router.get("/", (req, res) => {
    res.render(ejs.render("index.ejs"));
});

export { homeRoute }