const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return Hello TeamCity message', (done) => {
    request(app)
      .get('/')
      // Inga ulla text-ai mattum namma app.js-la kudutha puthiya text-ku etrapadi mathidunga
      .expect(200, 'Hello TeamCity! Automation Works Fine.', done); 
  });
});
