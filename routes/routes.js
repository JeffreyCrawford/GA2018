var db = require("../config/db")


module.exports = (app, db, nodemailer) => {


    /* Get attendees */
    app.get("/api/attendees", function(req, res) {
        db.attendees.findAll({
            }).then(function (data) {
                res.send(data)
            });
    });

    /* Create attendee */
    app.post("/api/attendees", function(req, res) {

        db.attendees.create({
            name: req.body.name,
            title: req.body.title,
            community: req.body.community,
            county: req.body.county,
            phone: req.body.phone,
            email: req.body.email,
            votingMember: req.body.votingMember,
            checkInTime: Date.now()

        });

    });

    app.put("/api/badges/", function(req, res) {
        db.badges.update(
            {attendeeId: req.body.attendeeId},
            {where: {barCode: req.body.barCode}}

        )
    })



    /* Get badges */
    app.get("/api/badges", function(req, res) {
        db.badges.findAll({
            }).then(function (data) {
            res.send(data)
            });
    });

    /* Create badge */
    app.post("/api/badges", function(req, res) {
        db.badges.create({
            barCode: req.body.barCode,
        });
    });
    

}