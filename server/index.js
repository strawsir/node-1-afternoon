const express = require("express");
const bodyParser = require("body-parser");

const app=express();
const mc= require("./Controllers/messages_controller")

const port = 3000;
app.use(bodyParser.json());
app.use(express.static("../public/build"))
app.listen(port, ()=>{console.log(`Server and port ${port} are having a party! ☻`)});


app.post("/api/messages", mc.create);
app.get("/api/messages", mc.read);
app.put("/api/messages/:id",mc.update);
app.delete("/api/messages/:id", mc.delete);
