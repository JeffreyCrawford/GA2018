const db = require("./config/db.js");

module.exports = seedData = function(){
/* Import table seeds */    
    /* Reference bulk insert method */
    var Bulk = require('./config/sequelizeBulkInsert');

    /* Import Attendees table */
    var bulk = new Bulk(db.attendees);
    bulk.importFile('config/attendeeseeds.csv', function(){
        console.log("Attendees table seed successful");
    });

}

 