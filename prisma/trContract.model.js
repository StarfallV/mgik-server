'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trContract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trContract.init({
    id: DataTypes.STRING,
    outlet_id: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    created_by: DataTypes.STRING,
    created_date: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    updated_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trContract',
  });
  return trContract;
};