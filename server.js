/* Express setup and router requirements */
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes/index"); 
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./config/db.js");


/* var seeds = require("./seeds.js"); */
/* require('dotenv').config(); */




/* Routing and request configuration */
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db); 





/* Sync to Sequelize and start listening */
db.sequelize.sync({force: false}).then(() => {

/* Reference bulk insert method */
var Bulk = require('./config/sequelizeBulkInsert');

/* var bulk = new Bulk(db.lines);
bulk.importFile('config/lineseeds.csv', function(){
//data is imported
}) */

/* var bulk = new Bulk(db.attendees);
bulk.importFile('config/attendeeseeds.csv', function(){
//data is imported
}) */

/* var bulk = new Bulk(db.badges);
bulk.importFile('config/badgeseeds.csv', function(){
//data is imported
}) */

	



}).then(function() {
app.listen(PORT, function() {
	    console.log("Listening on port " + PORT)
	})
});


