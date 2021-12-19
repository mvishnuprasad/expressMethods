import express from "express";
import data from "./data.json";
const app = express();
const port = 3000;
//add specific middleware/path
app.use(express.static("public"));
app.use('/img', express.static('img'));
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    //console.log(data);
});

app.post('/newItem', (req, res) =>
    res.send("Hello World! POST")
);
app.get('/getItem', (req, res) =>
//get the data and return 
res.json(data)
);
app.get('/item/:id', (req, res, next) =>
//get the id and return the corresponding json data
// Convert the id to a number req.params.id
//pass the id as json array index
//next helps to create own middleware. only one response method is allowed in a single method
//call
{
console.log(req.params.id);
let user = Number(req.params.id);
console.log(user);
console.log(data[user])
console.log(req.originalUrl);
console.log(req.method);
// above middleware is called before the response method

res.send(data[user])
next();
},
(req,res)=>{
    console.log('Second function')
}
);
app.get('/rdr', (req, res) =>
    res.redirect("https://www.flipkart.com/")
);
app.get('/img', (req, res) =>
    res.download("img/bg.jpg")
);
app.put('/putItem', (req, res) =>
    res.send("Hello World! PUT")
);
app.delete('/deleteItem', (req, res) =>
    res.send("Hello World! Delete")
);
//Chaining is explained below 
app.route('/Item')
    .get((req, res) => {
        res.send("New get response")
    })
    .put((req, res) =>
    res.send("Hello World! PUT")
    )
    .delete( (req, res) =>
    res.send("Hello World! Del")
    );

//Middleware : fns having access to re and res objects


var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200);
  
    
    res.end();

}).listen(8080);   

console.log("listning to 8080")


//1 Node register request event
//Goes into event loop for request
//When req comes , it will execute callback


//JSON
// {
    // "name" : "John",
    // "age" : 30,
    // "city" : "New York",
    

// }
//passing JSON data fromclient(postman) to server
app.use(express.json());
app.post('/item23', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});     