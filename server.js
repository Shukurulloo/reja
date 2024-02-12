console.log("Web Serverni boshlash");
const express = require("express");
// const res = require("express/lib/response")
const app = express(); 
const http = require("http");
const fs = require("fs");
 
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
    console.log(req);
    res.json({ test: "success" });
});  

app.get("/author", (req, res) => {
    res.render("author", {user: user});
});

app.get("/", function (req, res) {
    res.render("reja");
});

const server = http.createServer(app);
let PORT = 3001; 
server.listen(PORT, function() { 
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
    );
});