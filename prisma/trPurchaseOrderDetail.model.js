'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trPurchaseOrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trPurchaseOrderDetail.init({
    id: DataTypes.STRING,
    po_id: DataTypes.STRING,
    item_id: DataTypes.STRING,
    current_price: DataTypes.STRING,
    qty: DataTypes.STRING,
    created_by: DataTypes.STRING,
    created_date: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    updated_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trPurchaseOrderDetail',
  });
  return trPurchaseOrderDetail;
};