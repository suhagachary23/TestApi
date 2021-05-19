const { TestScore } = require('../models/TestScore');
const express = require('express');
const { Candidate } = require('../models/Candidate');
const routes = express.Router();

routes.post('/', async (req, res) => {
    const register = new TestScore({
        first_round: req.body. first_round,
        second_round: req.body.second_round,
        third_round: req.body.third_round,
        emailaddress: req.body.emailaddress  
    })
    try {
       const b = await register.save();
        res.send(b);
    } catch (error) {
        res.send(error)
    }
})

// routes.get('/',async(req,res)=>{
//     Candidate.aggregate([
//         {
//             $lookup:
//             {
//                 from:"TestScore",
//                 localField:"emailaddress",
//                 foreignField:"emailaddress",
//                 as:"emailid"
//             }
//         }
//     ]).exec(function(err,results){
//         if (err) throw err;
//         console.log(results);
//         res.send(results) 
//     })
// })

module.exports = routes;