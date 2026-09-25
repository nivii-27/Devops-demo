const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return Hello TeamCity message', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello TeamCity! Connection Successful.', done);
  });
});
