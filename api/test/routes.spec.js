const supertest = require('supertest');
const expect = require('chai').expect;
const Server = require('../src/server');
const conn = require('../src/database/connection');
const Videogame = require('../src/models/Videogame');

const app = new Server();

const agent = supertest(app.getExpressInstance());

const videogame = {
	name: 'Super Mario Bros',
};

describe('Videogame routes', () => {
	it('should get 200', () => agent.get('/api/v1'));
});
