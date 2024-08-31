const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('Order', {
    status: {
      type: DataTypes.ENUM,
      // TODO check this values
      values: ['active', 'pending', 'deleted'],
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    //
    address1: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    address2: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  });
