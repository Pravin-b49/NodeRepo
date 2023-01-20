const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('productdb', 'root', 'pravin49', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
