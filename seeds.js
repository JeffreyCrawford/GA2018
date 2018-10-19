const db = require("./config/db.js");

module.exports = seedData = function(){
/* Import table seeds */    
    /* Reference bulk insert method */
    var Bulk = require('./config/sequelizeBulkInsert');


    /* Import Lines table */
    var bulk = new Bulk(db.lines);
    bulk.importFile('config/lineseeds.csv', function(){
        console.log("Lines table seed successful");
    });


    /* Import Attendees table */
    var bulk = new Bulk(db.attendees);
    bulk.importFile('config/attendeeseeds.csv', function(){
        console.log("Attendees table seed successful");
    });


    /* Import Badge table */
    var bulk = new Bulk(db.badges);
    bulk.importFile('config/badgeseeds.csv', function(){
        console.log("Badges table seed successful");
    });
}

 