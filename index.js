import express from "express";
import data from "./data.json";
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    //console.log(data);
});

app.post('/newItem', (req, res) =>
    res.send("Hello World! POST")
);
app.get('/getItem', (req, res) =>
    res.send("Hello World! GET")
);
app.put('/putItem', (req, res) =>
    res.send("Hello World! PUT")
);
app.delete('/deleteItem', (req, res) =>
    res.send("Hello World! Delete")
);