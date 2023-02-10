/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AllCodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AllCodes.hasMany(models.User, {
        foreignKey: "positionId",
        as: "positionData",
      });
      AllCodes.hasMany(models.User, {
        foreignKey: "gender",
        as: "genderData",
      });
      AllCodes.hasMany(models.Schedules, {
        foreignKey: "timeType",
        as: "timeTypeData",
      });
      // connect to --------------------------------------------------------------------------
      AllCodes.hasMany(models.Dotor_info, {
        foreignKey: "pricedId",
        as: "priceTypeData",
      });
      AllCodes.hasMany(models.Dotor_info, {
        foreignKey: "paymentId",
        as: "paymentTypeData",
      });
      AllCodes.hasMany(models.Dotor_info, {
        foreignKey: "provinceId",
        as: "provinceTypeData",
      });
    }
  }
  AllCodes.init(
    {
      type: DataTypes.STRING,
      key: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AllCodes",
    }
  );
  return AllCodes;
};
