'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class msItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  msItem.init({
    id: DataTypes.STRING,
    item_no: DataTypes.STRING,
    name: DataTypes.STRING,
    alias_1: DataTypes.STRING,
    alias_2: DataTypes.STRING,
    alias_3: DataTypes.STRING,
    alias_4: DataTypes.STRING,
    created_by: DataTypes.STRING,
    created_date: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    updated_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'msItem',
  });
  return msItem;
};