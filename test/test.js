const request = require('supertest');
const app = require('../src/app');

test('check status code for home page', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      expect(res.statusCode).toBe(200);
      return done();
    });
});
