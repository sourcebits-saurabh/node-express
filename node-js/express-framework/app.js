
const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.send("Happy to use express");
});
app.listen("4000");