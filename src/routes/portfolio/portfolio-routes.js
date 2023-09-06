import express from "express";
import axios from "axios";
import 'dotenv/config';


const router = express.Router();

const portfolioRoutes = router.get("/", async (req, res) => {
    try {
        const url = "https://api.github.com/search/repositories?q=user:malzagic&sort=starred"
        const token = process.env.REACT_GITHUB_TOKEN;
        const options = {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Accept": "application/vnd.github+json",
                "Authorization": `Bearer ${token}`,
            }
        }

        const response = await axios.get(url, options);

        const data = response.data.items.filter(item => {
            return item.stargazers_count > 0;
        });

        res.send(data);
    } catch(err) {
        console.error(err)
    }
});

export { portfolioRoutes }