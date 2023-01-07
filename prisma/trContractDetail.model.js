'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trContractDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trContractDetail.init({
    id: DataTypes.STRING,
    contract_id: DataTypes.STRING,
    item_id: DataTypes.STRING,
    price: DataTypes.STRING,
    created_by: DataTypes.STRING,
    created_date: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    updated_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trContractDetail',
  });
  return trContractDetail;
};