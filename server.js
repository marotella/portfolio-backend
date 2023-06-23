//DEPENDENCIES
const express = require("express")
const cors = require("cors")


//JSON IMPORTS
const projects = require("./projects.json")
const about = require("./about.json")


//APP

const app = express ()


//MIDDLEWARE
app.use(cors())


//HOME ROUTE
app.get("/", (req, res) => {
    res.send("Hello World")
})

//PROJECT SHOW ROUTE
app.get ("/projects", (req,res)=> {
    res.json(projects)
})


//ROUTE TO SHOW ABOUT
app.get("/about", (req, res)=> {
    res.json(about)
})

//ROUTE TO SHOW Contact
app.get("/contact", (req, res)=> {
    res.json(about)
})

//PORT
const PORT = process.env.PORT || 4000;

//SERVER LISTENER 
app.listen(PORT, () => console.log("Listening on port  "+ PORT))