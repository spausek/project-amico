const db = require("../../models");
const Express = require('express');
const Router = Express.Router();



  Router.get("/api/users", function(req, res) {

   let users = [];
    db.User.findAll({}).then(function(allUsers) {
      users = allUsers;
      res.send(users);
  });

    
});


  Router.post("/api/users", function(req, res) {
    db.User.create({
      user_name: req.body.user_name,
      
    }).then(function(dbUser) {

      res.json(dbUser);
    });
  });


  Router.delete("/api/users/:id", function(req, res) {
    db.User.destroy({where:{
      id : req.params.id,
    }}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

 
 
  
module.exports = Router;
