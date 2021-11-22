const Sequelize = require('sequelize');
const ConfigDB = require('../config/database');

const connection = new Sequelize(ConfigDB);

const Videogame = require('../models/Videogame')
const Genre = require('../models/Genre')


// Models Init
Videogame.init(connection)
Genre.init(connection)


// Associate
Videogame.associate(connection.models)
Genre.associate(connection.models)

module.exports = connection;