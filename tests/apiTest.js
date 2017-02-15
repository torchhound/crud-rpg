const test = require('tape');
const request = require('supertest');

const app = require('../index');

test('get /api/character', assert => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      const msg = 'should return 200 OK';
      if (err) return assert.fail(msg);
      assert.pass(msg);
      assert.end();
    });
});