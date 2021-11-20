const Sequelize = require('sequelize');
const ConfigDB = require('../config/database');

const connection = new Sequelize(ConfigDB);

const Videogame = require('../models/Videogame')


// Models Init
Videogame.init(connection)
//User.init(connection);

// Associate
// User.associate(connection.models);

module.exports = connection;