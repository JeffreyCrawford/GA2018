module.exports = function(sequelize, Sequelize) {
    const Line = sequelize.define("line", {
    
        color: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        relationshipManager: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    
    });

    return Line;
}