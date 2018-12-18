
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'))
});

app.get('/example',(req,res)=>{
    res.send("fetching for exmaple in express");
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //database working here

    // res.send('SuccessFully posted data');

    const schema = Joi.object().keys({
        email:Joi.string().trim().email().required(),
        password:Joi.string().min(5).max(10).required(),
    });

    Joi.validate(req.body,schema,(err,result)=>{

        if(err){
            console.log(err);
            res.send('An error occured');}
        else
        {
            console.log(result);
            res.send('success in validation of form data');
        }
    });
    res.json({success:true})
});
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.query);
    res.send(req.params.name+":"+req.params.age);
});
app.listen("4000");