/* Express setup and router requirements */
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes/index"); 
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./config/db.js");
/* var seeds = require("./seeds.js"); */


/* Routing and request configuration */
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db); 


/* Sync to Sequelize and start listening */
db.sequelize.sync({force: true}).then(() => {
	app.listen(PORT, function() {
	    console.log("Listening on port " + PORT)
	})
});