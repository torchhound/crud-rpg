const test = require('tape');
const request = require('supertest');

const app = require('../index');

test('get /', assert => {
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

test('get /api/character', assert => {
  request(app)
    .get('/api/character')
    .expect(200)
    .end((err, res) => {
      const msg = 'should return 200 OK';
      if (err) return assert.fail(msg);
      assert.pass(msg);
      assert.end();
    });
});

test('get /api/map', assert => {
  request(app)
    .get('/api/map')
    .expect(200)
    .end((err, res) => {
      const msg = 'should return 200 OK';
      if (err) return assert.fail(msg);
      assert.pass(msg);
      assert.end();
    });
});

test('post /api/enemy', assert => {
  request(app)
    .post('/api/enemy')
    .expect(200)
    .end((err, res) => {
      const msg = 'should return 200 OK';
      if (err) return assert.fail(msg);
      assert.pass(msg);
      assert.end();
    });
});
