const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    const params = { }
    res.status(200).render('index.html',params);
})
app.get("/bookings",(req,res)=>{
    const params = { }
    res.status(200).render('bookings.html',params);
})
app.get("/contact",(req,res)=>{
    const params = { }
    res.status(200).render('contact.html',params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});