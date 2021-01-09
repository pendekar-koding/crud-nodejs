'use strict';
module.exports = (sequelize, DataTypes) => {
  const bill_payment = sequelize.define('bill_payment', {
    billing_id: {type:
      DataTypes.INTEGER,
      primaryKey:true},
    amount: DataTypes.DOUBLE,
    payment_date: DataTypes.DATE
  }, {
    timestamps:false,
    tableName:'bill_payment'
  });
  bill_payment.associate = function(models) {
    // associations can be defined here
  };
  return bill_payment;
};