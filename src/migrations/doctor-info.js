/** @format */

"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dotor_info", {
      // pricedId
      // provinceId
      // paymentId
      // addressClinic
      // nameClinic
      // note
      // count
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doctorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      pricedId: {
        type: Sequelize.STRING,
      },
      paymentId: {
        type: Sequelize.STRING,
      },
      provinceId: {
        type: Sequelize.STRING,
      },
      nameClinic: {
        type: Sequelize.STRING,
      },
      addressClinic: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("dotor_info");
  },
};
