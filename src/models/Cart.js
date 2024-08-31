const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('Cart', {
    status: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
