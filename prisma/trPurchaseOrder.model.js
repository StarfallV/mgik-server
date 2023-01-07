'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trPurchaseOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trPurchaseOrder.init({
    id: DataTypes.STRING,
    po_number: DataTypes.STRING,
    outlet_id: DataTypes.STRING,
    note: DataTypes.STRING,
    created_by: DataTypes.STRING,
    created_date: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    updated_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trPurchaseOrder',
  });
  return trPurchaseOrder;
};