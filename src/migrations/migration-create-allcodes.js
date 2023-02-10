/** @format */

"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AllCodes", {
      // key: DataTypes.STRING,
      // type: DataTypes.STRING,
      // value_en: DataTypes.STRING,
      // value_vi: DataTypes.STRING
      id: {
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      key: {
        type: Sequelize.STRING,
      },
      valueEn: {
        type: Sequelize.STRING,
      },
      valueVi: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("AllCodes");
  },
};
