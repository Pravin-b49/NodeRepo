const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  brand: Sequelize.STRING,
  model_no: Sequelize.STRING,
  processor: Sequelize.STRING,
  ram: Sequelize.STRING,
  front_camera: Sequelize.STRING,
  rear_camera: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
