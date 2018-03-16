const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const htmlRoutes = require('./app/routes/htmlRoutes.js');
const apiRoutes = require('./app/routes/apiRoutes.js');
const publicDirectory = './app/public/';
const db = require('./models');
const expressHandlerbars = require('express-handlebars');


createServer = ()=>{
	const Server = {
		port : undefined,
		app : undefined,
	}

	Server.app = express();
	
	Server.app.use(express.static(publicDirectory));
	Server.app.use(bodyParser.urlencoded({ extended: true }));
	Server.app.use(bodyParser.json());
	//Server.app.engine("handlebars", expressHandlerbars({ defaultLayout: "main" }));
	//Server.app.set("view engine", "handlebars");
	//Server.app.use(htmlRoutes);
	Server.app.use(apiRoutes)
	

	return Server;

}


const Server = createServer();
Server.port = 8080;
db.sequelize.sync();
Server.app.listen(process.env.PORT || Server.port);

