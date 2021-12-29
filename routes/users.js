const express = require('express')
const router = express.Router()

router.get('/new', (req, res) =>{
    console.log("/user/new")
    res.render("index", {text:"word"})
})

// to get variables from route use :my_variable
router.get('/id/:id', (req, res) =>{
    console.log("/user/new")
    console.log(req.user)
    my_id = req.params.id
    // to render html with variables replaced use ejs instead
    res.render("index", {
                            text:my_id,
                        })
})


// to organize get post put delete on a route..
router
    .route("/subcat")
    .get((req, res)=>{
        res.send("get user subcat")
    } )
    .post((req, res)=>{
        res.send("post user sbucat")
    })
    .put((req, res)=>{
        res.send("put user subcat")
    })

// this middleware function runs every time it finds target param
const users = [{name:'juan'}, {name:'laura'}]
router.param("id", (req, res, next, id)=>{
    console.log(id)
    // can use this to, for example add something to req
    req.user = users[id]
    next()
})



    // create a middleware





module.exports = router