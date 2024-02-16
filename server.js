const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = 
"mongodb+srv://simon:FGDF0F8TevVxqQZi@cluster0.cowxvjj.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    }, 
    (err, client) => {
    if(err) console.log("ERROR on connect MongoDB");
    else {
        console.log("MomgoDB connection succeed");
        // console.log(client)
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000; 
        server.listen(PORT, function() { 
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });  
    }
  }
);
