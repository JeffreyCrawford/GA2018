/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	const Attendee = sequelize.define('attendee', {
		fullName: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		firstName: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		middleName: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		lastName: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		jobTitle: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		account: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		countyAccountAccount: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		rsvpGa2018: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		proxyDesigneeGa2018: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		ga2018AsADesigneeFor: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		nopecGeneralAssemblyMember: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
		},
		accountTypeAccountAccount: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		gaDelegateAccountAccount: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		checkInTime: {
			type: Sequelize.DATE,
			allowNull: true,
		},
		badge: {
			type: Sequelize.TEXT,
			allowNull: true,
		}
	});

	return Attendee;
};
