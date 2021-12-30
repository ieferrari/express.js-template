'use strict'
const express = require('express') // import express
const config = require('./config.js'); // load config file

const PORT = config.PORT;
const HOST = config.HOST;


const app = express();              // this creates the app

app.set('view engine', "ejs");

app.get('/', (req, res)=>{
    res.status(200).send("hello, express server is running! ")
})

app.get('/error', (req, res) =>{
    console.log("here")
    res.status(500).json({message:"terrible error"})
    //res.send("hi")
})

app.get("/render_html", (req,res) =>{
    console.log("get / ")
    // by default every html file is inside /views folder
    res.render('index', {text:"word"})    
})


// load a router with all the endpoints for user
const userRouter = require('./routes/users');

app.use('/user', userRouter);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);