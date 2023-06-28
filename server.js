//DEPENDENCIES
const express = require("express")
const cors = require("cors")
const nodemailer = require('nodemailer');
require('dotenv').config();

//JSON IMPORTS
const projects = require("./projects.json")
const about = require("./about.json")


//APP

const app = express()


//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//HOME ROUTE
app.get("/", (req, res) => {
    res.send("Hello World")
})

//PROJECT SHOW ROUTE
app.get("/projects", (req, res) => {
    res.json(projects)
})


//ROUTE TO SHOW ABOUT
app.get("/about", (req, res) => {
    res.json(about)
})

//ROUTE TO SHOW Contact
app.get("/contact", (req, res) => {
    res.json(about)
})
;
module.exports = app;


//PORT
const PORT = process.env.PORT || 4000;

//SERVER LISTENER 
app.listen(PORT, () => console.log("Listening on port  " + PORT))