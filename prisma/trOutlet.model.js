'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trOutlet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trOutlet.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    created_by: DataTypes.STRING,
    created_date: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    updated_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trOutlet',
  });
  return trOutlet;
};