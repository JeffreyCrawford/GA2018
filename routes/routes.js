module.exports = (app, db) => {


/* ATTENDEE ROUTES */

    /* Get specific attendee via url */
    app.get("/api/attendees/:badge", function(req, res) {
        db.attendees.findAll({
                where: {badge: req.params.badge}
            }).then(function (data) {
                res.send(data)
            });
    });

    /* Create attendee and post to API*/
    app.post("/api/attendees", function(req, res) {
        db.attendees.create({
		fullName: req.body.fullName,
		firstName: req.body.firstName,
		middleName: req.body.middleName,
		lastName: req.body.lastName,
		jobTitle: req.body.jobTitle,
		account: req.body.account,
		countyAccountAccount: req.body.countyAccountAccount,
		rsvpGa2018: req.body.rsvpGa2018,
		proxyDesigneeGa2018: req.body.proxyDesigneeGa2018,
		ga2018AsADesigneeFor: req.body.ga2018AsADesigneeFor,
		nopecGeneralAssemblyMember: req.body.nopecGeneralAssemblyMember,
		accountTypeAccountAccount: req.body.accountTypeAccountAccount,
		gaDelegateAccountAccount: req.body.gaDelegateAccountAccount,
		checkInTime: req.body.checkInTime,
		badge: req.body.badge
        });
    });



/* BADGE ROUTES */
    /* Get all badges */
    app.get("/api/badges", function(req, res) {
        db.badges.findAll({
            }).then(function (data) {
            res.send(data)
            });
    });

    /* Get specific badge via url */
    app.get("/api/badges/:barCode", function(req, res) {
        db.badges.findAll({
                where: {barCode: req.params.barCode}
            }).then(function (data) {
                res.send(data)
            });
    });


    /* Create badge and post to API*/
    app.post("/api/badges", function(req, res) {
        db.badges.create({
            id: req.body.id,
            barCode: req.body.barCode,
            attendeeId: req.body.attendeeId
        });
    });
    
    app.put("/api/attendees/", function(req, res) {
        db.attendees.update(
            {checkInTime: new Date().toTimeString()},
            {where: {badge: req.body.badge}}
        )
    })





/* DEPRECATED */
    /* Update badge attendeeid */
    app.put("/api/badges/", function(req, res) {
        db.badges.update(
            {attendeeId: req.body.attendeeId},
            {where: {barCode: req.body.barCode}}
        )
    })

}