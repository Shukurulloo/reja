console.log("Web Serverni boshlash");
const express = require("express");
// const res = require("express/lib/response")
const app = express(); 
const fs = require("fs");
const mongodb = require("mongodb");

// MongoDB connect(ulash)
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERR:", err);
    } else {
        user = JSON.parse(data)
    } 
});

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2: Session code
// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");



// 4: Routing code

app.post("/create-item", (req, res) => {
    // console.log(req.body);
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops)
        res.json(data.ops[0]);
    });
});  



app.get("/author", (req, res) => {
    res.render("author", {user: user});
});


app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, 
    function(err, data) {
        res.json({state: "success"});
    });
    // console.log(id);
    // res.end("done");

});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)},
        {$set:{reja: data.new_input}}, 
        function (err, data) {
        res.json({state: "success"});
    })
    // res.end("done");
})

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({state: "hamma rejalar o'chirildi"});
        })
    }
})

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            // console.log(data);
            res.render("reja", { items: data });
        }
    })
});

module.exports = app;               