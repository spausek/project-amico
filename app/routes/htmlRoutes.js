const Express = require('express');
const Path = require('path');
const Router = Express.Router();

    
 Router.get("/", function(req, res) {
    res.sendFile(Path.join(__dirname, "/../public/index.html"));
  });
  
 Router.get("/login", function(req,res){
 	res.sendFile(Path.join(__dirname + "/../public/login.html"))
 })

 Router.get("/profile", function(req,res){
 	res.sendFile(Path.join(__dirname + "/../public/profile.html"))
 })

 





module.exports = Router;