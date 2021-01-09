'use strict';
module.exports = (sequelize, DataTypes) => {
  const loan = sequelize.define('loan', {
    loan_number: {type:
      DataTypes.INTEGER,
      primaryKey:true},
    loan_type_code: DataTypes.STRING,
    cif: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    balance: DataTypes.DOUBLE,
    open_date: DataTypes.DATE,
    due_date: DataTypes.DATE,
    tenor: DataTypes.INTEGER
  }, {
    timestamps:false,
    tableName: 'loan'
  });
  loan.associate = function(models) {
    // associations can be defined here
  };
  return loan;
};