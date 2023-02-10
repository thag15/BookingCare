'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('doctor_clinic_specialty', {
            // doctorId: DataTypes.INTEGER,
            // clinicId: DataTypes.INTEGER,
            // specialty: DataTypes.INTEGER,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            doctorId: {
                type: Sequelize.INTEGER
            },
            clinicId: {
                type: Sequelize.INTEGER
            },
            specialty: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('doctor_clinic_specialty');
    }
};