const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Area = require('./models/areadata');
const Enumerator = require('./models/enumeratordata');
const Survey = require ('./models/surveydata');
var cors = require('cors');

const port = 3000;


const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://vipin:sravs123@mycluster.npncw.azure.mongodb.net/ProjectDb?retryWrites=true&w=majority'
,(err)=>{
//mongoose.connect('mongodb://localhost:27017/ProjectDb',(err)=>{
    if(err){console.log('erorr'+ err)}
    else{console.log('connected to mongo db')}
}) ;


app.use(bodyParser.json());


// app.get('/arealist',(req,res)=>{
//     let data = new Area;
 
//     Area.find()
//     .then((data)=>{
//         res.send(data)
//     })
//     console.log(data)

   
// })

app.get('/enumeratorlist',(req,res)=>{
    let data = new Enumerator;
 
    Enumerator.find()
    .then((data)=>{
        res.send(data)
    })
  

   
})


app.post('/addenum',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
    console.log(req.body.enumerator.name);
   console.log("post called")
   let enume = req.body.enumerator;
   var e ={
    name:enume.name,
    username:enume.username,
    password:enume.password,
    area:enume.area,
    role:enume.role
   }

   console.log(e)
    
    let enumerator = new Enumerator(e);
    enumerator.save((err,data)=>{
        if(err){console.log(err)}
        else
        {
            res.status(200).send(data);
        }
    });
})

app.post('/deleteenum',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
    console.log(req.body.data.name);
   console.log("delete called")
 Enumerator.deleteOne({_id:req.body.data._id})
 .then(function(data){
     res.send(data)
 })
})

app.post('/editenum',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
    console.log(req.body.enumerator.name);
   console.log("editenum called")
   let enume = req.body.enumerator;
    var editenum =
    {   
    name:enume.name,
    username:enume.username,
    password:enume.password,
    area:enume.area,
    role:enume.role    }

    Enumerator.findByIdAndUpdate({_id:req.body.enumerator._id},{$set:editenum}
        , function(err, result){

            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        }
        
    )
    
})

app.post('/addsurvey',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
    console.log(req.body.survey.name);
   console.log("post called")
   let sur = req.body.survey;
   var e ={
    name:sur.name,
     age:sur.age,
     tcno:sur.tcno,
     address:sur.address,
     aadar:sur.aadar,
     areacode:sur.areacode,
     description:sur.description
   }

   console.log(e)
    
    let sur1 = new Survey(e);
    sur1.save((err,data)=>{
        if(err){console.log(err)}
        else
        {
            console.log("data saved")
            res.status(200).send(data);
        }
    });
})

app.get('/surveylist',(req,res)=>{
    let data = new Enumerator;
 
    Survey.find()
    .then((data)=>{
        res.send(data)
    })

})

app.post('/editsdata',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
    console.log(req.body.survey.name);
   console.log("survey edit is called")
   let sur = req.body.survey;
    var surv =
    {   
        name:sur.name,
        age:sur.age,
        tcno:sur.tcno,
        address:sur.address,
        aadar:sur.aadar,
        areacode:sur.areacode,
        description:sur.description  
 }

   Survey.findByIdAndUpdate({_id:req.body.survey._id},{$set:surv}
        , function(err, result){

            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        }
        
    )
    
})

app.post('/deletesdata',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
    console.log(req.body.survey.name);
   console.log("delete called")
 Survey.deleteOne({_id:req.body.survey._id})
 .then(function(data){
     res.send(data)
 })
})

app.post('/login',(req,res)=>{
    let userData = req.body.login;
    console.log("data getting on server")
    console.log(userData)
    Enumerator.findOne({username:userData.username},(err,user)=>{
        if(err){
            console.log(err)
        }
        else{
            if(!user){
                
                res.status(401).send('Invalid Username')
            }
            else{
               
                if(user.password !== userData.password){
                   
                    res.status(401).send('invalid password')
                }
                else{
                    if(user.role =='admin')
                    {
                        let payload = {subject:user._id}
                        // let token = jwt.sign(payload,'secretKey')
                        let token ='admin'
                        res.status(200).send({token})
                    }
                    else{
                        let token ='user'
                        res.status(200).send({token})}
                    // console.log(user.role)
                    // res.status(200).send(user)
                }
            }
        }
    })
})

app.listen(port,function(){
    console.log("Server is running on the port "+port);
})
