import express from "express";
import dotenv from "dotenv";

// initializing dotenv 
dotenv.config();

// creating app 
const app = express();

// get method 
app.get("/", (req,res)=>{
    res.send("<h1>Yah! , Our Server Successfully working</h1>");
});

//lisning server 
app.listen(process.env.PORT , () => {
    console.log("Server started successfully");
});


