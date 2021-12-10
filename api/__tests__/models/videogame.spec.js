const connection = require('../../src/database/connection');
const Videogame = require('../../src/models/Videogame');

describe('Model Testing', function () {
	afterAll(async function () {
		await connection.sync({ force: true });
		connection.close();
	});
	describe('Videogame model', function () {
		beforeEach(async function () {
			await Videogame.sync({ force: true });
		});
		describe('Validations', function () {
			it('error sin name', function (done) {
				Videogame.create({
					description: 'Descripcion',
					platforms: [{ id: 1, name: 'Playstation' }],
				})
					.then(() => done('No debería haberse creado'))
					.catch(() => done());
			});
			it('error sin descripcion', function (done) {
				Videogame.create({
					name: 'Martin',
					platforms: [{ id: 1, name: 'Playstation' }],
				})
					.then(() => done('No deberia haberse creado'))
					.catch(() => done());
			});
			it('error sin Plataforma', function (done) {
				Videogame.create({
					name: 'Martin',
					description: 'Descripcion',
				})
					.then(() => done('No debería haberse creado'))
					.catch(() => done());
			});
		});
	});
});
