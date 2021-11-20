const express = require('express');
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT || 4001;
	}

	start() {
        this.app.listen(this.port,() =>{
            console.log(`||--> Http server running in port:${this.port} <--||`)
        })
    }
}

module.exports = Server;
