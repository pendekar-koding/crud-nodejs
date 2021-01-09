'use strict';
module.exports = (sequelize, DataTypes) => {
  const billing = sequelize.define('billing', {
    billing_id: {type:
      DataTypes.INTEGER,
      primaryKey:true},
    loan_number: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    bill_date: DataTypes.DATE,
    due_date: DataTypes.DATE
  }, {
    timestamps:false,
    tableName: 'billing'
  });
  billing.associate = function(models) {
    // associations can be defined here
  };
  return billing;
};