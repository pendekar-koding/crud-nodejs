'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    cif: {type:
      DataTypes.STRING,
      primaryKey: true},
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    birth_place: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: "customer"
  });
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};