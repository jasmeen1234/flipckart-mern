// import express from 'express'
const express = require('express');
// const connection =require('./database/db.js')
const dotenv =require('dotenv');
const DefaultData =require('./default.js')
const Router =require('./routes/route.js') 
const connection=require('./database/db.js')
dotenv.config();




const PORT=8000
const username = process.env.DB_USERNAME;
console.log(username);

const password = process.env.DB_PASSWORD;
connection(username,password);

const app=express();
app.use('/',Router);
app.listen(PORT,()=>{
    console.log(`server running successfully on port ${PORT}`)
})
DefaultData();