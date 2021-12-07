const connection = require('../../src/database/connection');
const Genre = require('../../src/models/Genre');

describe('Model Testing', function () {
	afterAll(async function () {
		await connection.sync({ force: true });
		connection.close();
	});
	describe('Genre model', function () {
		beforeEach(async function () {
			await Genre.sync({ force: true });
		});
		describe('Validations', function () {
			it('error sin ID', function (done) {
				Genre.create({
					name: 'Hola',
				})
					.then(() => done('No debería haberse creado'))
					.catch(() => done());
			});
			it('error sin name', function (done) {
				Genre.create({
					id: 1,
				})
					.then(() => done('No deberia haberse creado'))
					.catch(() => done());
			});
			it('error con un name invalido', function (done) {
				Genre.create({
					id: 1,
					name: [1],
				})
					.then(() => done('No debería haberse creado'))
					.catch(() => done());
			});
		});
	});
});
