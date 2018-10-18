/* Database connection/configuration for Sequelize */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('GeneralAssembly2018', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});




/* Sequelize authentication/connection testing */
sequelize
.authenticate()
.then(() => {
	console.log("Sequelize connection to MYSQL established");
})
.catch(err => {
	console.error("Sequelize connection to MYSQL failed:", err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/* Identify Models */
db.attendees = require('../models/attendees.js')(sequelize, Sequelize);
db.badges = require('../models/badges.js')(sequelize, Sequelize);
db.lines = require('../models/lines.js')(sequelize, Sequelize);

/* Associations */
db.badges.hasOne(db.attendees);
db.lines.hasMany(db.attendees);





module.exports = db;
