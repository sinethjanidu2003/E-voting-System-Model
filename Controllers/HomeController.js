const express = require("express");
const app = express();


function verification(req,res){
    res.render("verification");
}

function vote(req,res){
    res.render('vote');
}

exports.verification = verification;
exports.vote = vote;