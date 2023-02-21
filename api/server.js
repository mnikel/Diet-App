const fs = require("fs").promises;
const path = require("path");
const express = require("express");

const app = express();
const MEALS_PATH = path.join(__dirname, "data.json");

app.get("/recipes", async (req, res) => {
    try { 
        const data = await fs.readFile(MEALS_PATH);
        const MEALS = JSON.parse(data);
        res.json(MEALS)
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to read file");
    }
});

app.get("/recipes/breakfasts", async (req, res) => {
    try { 
        const data = await fs.readFile(MEALS_PATH);
        const MEALS = JSON.parse(data);
        res.json(MEALS.breakfasts)
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to read file");
    }
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log("App is listening on port " + port);