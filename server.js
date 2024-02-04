console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2: Session code
// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.get("/hello", function(req, res) {
    res.end(`<div style="

    display: flex;
    justify-content: center;
    background: aqua;
    color: red;
    padding: 100px;

    "><h2>HELLO WORLD </h2></div>`);
});

app.get("/gift", function(req, res) {
    res.end(`<h1>Siz sovg'alar sahifasidasiz.`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});