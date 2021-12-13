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
app.put('/putItem', (req, res) =>
    res.send("Hello World! PUT")
);
app.delete('/deleteItem', (req, res) =>
    res.send("Hello World! Delete")
);