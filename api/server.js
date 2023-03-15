const fs = require("fs").promises;
const path = require("path");
const express = require("express");
const mongoose = require('mongoose')
const cors = require('cors')
let Recipe = require('./model/Recipe')

const app = express();

const mongoDB = require('../mongodb')


app.use(cors())
// TODO dodac endpoint do breakfasts, shakes, dinners
// type: TYPE 
app.get('/recipes/meals', async (req, res) => {
    try { 
        const recipes = await Recipe.find();
        res.json(recipes)
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to read file");
    }
});

// app.get('/recipes/meals', async (req, res) => {
//     const recipes = await Recipe.find();
//     res.json(recipes)
// });

// app.get("/recipes/breakfasts", async (req, res) => {
//     try { 
//         const data = await fs.readFile(MEALS_PATH);
//         const MEALS = JSON.parse(data);
//         res.json(MEALS.breakfasts)
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Failed to read file");
//     }
// });


const port = process.env.PORT || 8080;

mongoose.connect(mongoDB); 

app.listen(port);

console.log("App is listening on port " + port);