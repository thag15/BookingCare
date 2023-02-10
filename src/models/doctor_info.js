/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dotor_info extends Model {
    static associate(models) {
      Dotor_info.belongsTo(models.User, { foreignKey: "doctorId" });
      // ---------------------------------------------------------------------------------------
      Dotor_info.belongsTo(models.AllCodes, {
        foreignKey: "pricedId",
        targetKey: "key",
        as: "pricedTypeData",
      });
      Dotor_info.belongsTo(models.AllCodes, {
        foreignKey: "paymentId",
        targetKey: "key",
        as: "paymentTypeData",
      });
      Dotor_info.belongsTo(models.AllCodes, {
        foreignKey: "provinceId",
        targetKey: "key",
        as: "provinceTypeData",
      });
    }
  }
  Dotor_info.init(
    {
      doctorId: DataTypes.INTEGER,
      pricedId: DataTypes.STRING,
      paymentId: DataTypes.STRING,
      provinceId: DataTypes.STRING,
      nameClinic: DataTypes.STRING,
      addressClinic: DataTypes.STRING,
      note: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dotor_info",
      freezeTableName: true,
    }
  );
  return Dotor_info;
};
