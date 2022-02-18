const express = require ("express");
const cookiParser = require("cookie-parser");
const app = express ();
const dotenv = require("dotenv");

// dotenv
dotenv.config({path:"./config.env"});
require("./db/connection");
// Port Number
const PORT = process.env.PORT || 5000;

// Cooki Parser Require
app.use(cookiParser());
// Require the json format 
app.use(express.json());
// Require the router file 
app.use(require('./router/auth'));
// Heroku code
if(process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}
// PORT 
app.listen(PORT, ()=>{
    console.log (`Server is running at port no ${PORT}`);
});