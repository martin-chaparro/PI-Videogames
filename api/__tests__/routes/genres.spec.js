var supertest = require('supertest-as-promised');
const Server = require('../../src/server');

const server = new Server();

const app = supertest(server.getExpressInstance());

describe('Routes Genres', function() {

    describe('/api/v1/genres', function() {
        it('GET responde con un array', function() {
          return app // supertest nos permite hacer y testear requests HTTP
            .get('/api/v1/genres') // hacemos un request HTTP: GET a '/families'
            .expect(200) // el codigo de status del response
            .expect('Content-Type', /json/) // podemos testear los headers
            .expect(function(res) {
              expect(res.body).toBeInstanceOf(Array); // testeamos la respuesta con el body
            });
        });
    
      });
  
   });
  
