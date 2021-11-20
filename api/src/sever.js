const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT || 4001;

		this.paths = {
			apiv1: '/api/v1',
		};

		//middlewares
		this.middlewares();

		//Rutas de Aplicacion
		this.routes();
	}

	middlewares() {
		//CORS
		this.app.use(cors());

		// Lectura y parseo del body
		this.app.use(express.json());

		this.app.use(morgan('dev'));
	}

	routes() {
		this.app.use(this.paths.apiv1, require('./routes/api'));
	}

	start() {
		this.app.listen(this.port, () => {
			console.log(`||--> Http server running in port:${this.port} <--||`);
		});
	}
}

module.exports = Server;
