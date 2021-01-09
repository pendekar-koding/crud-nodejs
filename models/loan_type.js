'use strict';
module.exports = (sequelize, DataTypes) => {
  const loan_type = sequelize.define('loan_type', {
    loan_type_code: {type:
      DataTypes.STRING,
      primaryKey:true},
    loan_type_desc: DataTypes.STRING
  }, {
    timestamps:false,
    tableName: 'loan_type'
  });
  loan_type.associate = function(models) {
    // associations can be defined here
  };
  return loan_type;
};