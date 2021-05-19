const { Candidate } = require('../models/Candidate');
const { TestScore } = require('../models/TestScore');
const express = require('express');
const routes = express.Router();

routes.post('/', async (req, res) => {
    const register = new Candidate({
        name: req.body.name,
        emailaddress: req.body.emailaddress       
    })
    try {
       const b = await register.save();
        res.send(b);
    } catch (error) {
        res.send(error)
    }
})

routes.get('/',async(req,res)=>{
    TestScore.aggregate([
        {
            $lookup:
            {
                from:"candidates",
                localField:"emailaddress",
                foreignField:"emailaddress",
                as:"emailid"
            }
        }
    ]).exec(function(err,results){
        if (err) throw err;
        console.log(results);
        res.send(results) 
    })
})

routes.get('/check',async(req,res)=>{
        TestScore.aggregate([
                {
                $group: { 
                    _id: "$emailaddress",
                    maxscore: { $max:{  $max: { $add: [ "$first_round", "$second_round","$third_round" ] } }}
                }
                 }

         ]).exec(function(err,results){
        if (err) throw err;
        console.log(results);
        res.send(results) 
    })

})

routes.get('/checks',async(req,res)=>{
    TestScore.aggregate(
    [
      {
        $group:
          {
            _id: "$emailaddress",
            avgScore: { $avg: { $add: [ "$first_round", "$second_round","$third_round" ] } }
          }
      }
    ]).exec(function(err,results){
        if (err) throw err;
        console.log(results);
        res.send(results)
})
})


module.exports = routes;
