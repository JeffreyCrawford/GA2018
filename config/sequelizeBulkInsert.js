// sequelizeBulkInsert.js
var fs = require('fs');
var async = require('async');
var csv = require('csv');


module.exports = function(Model){
  this.importFile = function(filename, doneLoadingCallback) {
    var input = fs.createReadStream(filename);
    var parser = csv.parse({
      columns: true,
      relax: true
    });

    var inserter = async.cargo(function(tasks, inserterCallback) {
        Model.bulkCreate(tasks).then(function() {
            inserterCallback();
          }
        );
      },
      1000
    );

    parser.on('readable', function () {
      while(line = parser.read()) {
        inserter.push(line);
      }
    });

    parser.on('end', function (count) {
      inserter.drain = function() {
        doneLoadingCallback();
      }
    });

    input.pipe(parser);
  }
}