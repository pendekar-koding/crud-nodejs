'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    id: {type:
      DataTypes.INTEGER,
      primaryKey:true},
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps:false,
    tableName: 'employee'
  });
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};