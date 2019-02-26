var express = require("express")
var router = express.Router()

var burger = require("../models/burger")

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var obj = {
            burgers: data
        }
        console.log(obj)

        res.render("index", obj)
    })
})

router.post("/api/burgers", function(req, res){
    burger.insertOne([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured],
    function(result){
        res.json({id: res.insertId})

    })
})

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id

    console.log("condition", condition)

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
            res.status(200).end();
          
    })
})

module.exports = router 