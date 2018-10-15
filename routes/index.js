const routes = [
	require('./routes'),
];


/* Route connections */
module.exports = function router(app, db) {
	return routes.forEach((route) => {
	route(app, db);
	});
};