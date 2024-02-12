console.log("Web Serverni boshlash");
const express = require("express");
// const res = require("express/lib/response")
const app = express(); 
const fs = require("fs");
 

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

// app.get("/hello", function(req, res) {
//     res.end(`<div style="

//     display: flex;
//     justify-content: center;
//     background: aqua;
//     color: red;
//     padding: 100px;

//     "><h2>HELLO WORLD </h2></div>`);
// });

// app.get("/gift", function(req, res) {
//     res.end(`<h1>Siz sovg'alar sahifasidasiz.`);
// });

app.post("/create-item", (req, res) => {
    // console.log(req.body);
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.end("succeesfully added");
        }
    });
    // res.end("succees");
    // console.log(req);
    // res.json({ test: "success" });
});  

app.get("/author", (req, res) => {
    res.render("author", {user: user});
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    })
});

module.exports = app;