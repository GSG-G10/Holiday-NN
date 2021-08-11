const request = require('supertest');
const app = require('../src/app');

test('Testing the root end point', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('content-type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});
