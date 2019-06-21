const db = require('../data/dbConfig');
const server = require('./server.js');
const supertest = require('supertest');

describe('server', () => {
      beforeEach(async () => {
            await db('games').truncate();
      })

      describe('GET "/" sanity check', () => {
            it('should render with no errors and 200 ok', () => {
                  return supertest(server)
                  .get('/')
                  .expect(200)
            })
            it('should respond with json format', () => {
                  return supertest(server)
                  .get('/')
                  .expect('Content-Type', /json/i)
            })
            it('should respond with a message', async () => {
                  await supertest(server)
                  .get('/')
                  .then(res => {
                        expect(res.body).toEqual({ message: "oh, hey!"})
                  })
            })
      })

      describe('GET "/games"', () => {
            it('should render list + 200 OK', () => {
                  return supertest(server)
                  .get('/games')
                  .expect(200)
            })
            it('should render list in json format', () => {
                  return supertest(server)
                  .get('/games')
                  .expect('Content-Type', /json/i)
            })
            it('should return an array', async () => {
                  let res = await supertest(server).get('/games')
                  expect(Array.isArray(res.body)).toBe(true);
            })
      })

      describe('POST "/games"', () => {
            it('should respond with 201 when new game is added', async () => {
                  const game = {
                        title: 'Settlers of Catan',
                        genre: 'Strategy/Board'
                  }
                  await supertest(server)
                        .post('/games')
                        .send(game)
                        .expect(201)
            })
            it('should respond in json format', async () => {
                  const game = {
                        title: 'Settlers of Catan',
                        genre: 'Strategy/Board'
                  }
                  await supertest(server)
                        .post('/games')
                        .send(game)
                        .expect('Content-Type', /json/i)
            })
            it('should return a 400 error when required info is missing', async () => {
                  let res = await supertest(server)
                        .post('/games')
                        .send({ title: 'Tomb Raider'})
                        expect(res.status).toBe(422)
            })
      })
      // describe('DELETE "/games:id"', () => {
      //       it('should delete game and return 204', async () => {
      //              let res = await supertest(server).get('/games')
      //              let game = await supertest(server).delete(`/games/${res.body.id}`);
      //              expect(game.status).toBe(204)
      //              expect(game.body).toHaveLength(0)
      //       })
      // })
})