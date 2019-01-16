const express = require("express");
const {json} = require("body-parser");
const app = express();
const mc = require("./controller/messages_controllers")

app.use(json());
app.use( express.static( __dirname + '/../public/build' ) );

const messagesBaseUrl = "/api/messages";

app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.post);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);


app.listen(3001 ,() => {
    console.log("Listening on port 3001");
})