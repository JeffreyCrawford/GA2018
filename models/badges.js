module.exports = function(sequelize, Sequelize) {
    const Badge = sequelize.define("badge", {
    
        barCode: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false,
            primary_key: true
        },
        attendeeId: {
            type: Sequelize.INTEGER,
            unique: true
        }
    
    });

    return Badge;
}

