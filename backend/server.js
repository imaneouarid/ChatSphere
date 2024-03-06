//app.js
const express= require("express")
require('dotenv').config();
const mongoose = require('mongoose'); 
const cors = require('cors');
require('dotenv').config();

const app=express()
app.use(express.json());
app.use(cors("*"));



mongoose.connect(process.env.URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Not connected to the database " + err);
  });


//json middleware
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
     
})
