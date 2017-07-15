// import internal scripts
let app = require('../server/server');

// import external modules
import assert from  'assert';

describe('Example Node Server', () => {
  it('should return 200', done => {
    app.listen(8080);
    app.get('http://127.0.0.1:8080', res => {
      assert.equal(200, res.statusCode);
    });
    done();
  });
  it('should return true with /api/users route', done => {
    app.listen(8080);
    app.get('http://127.0.0.1:8080/api/users', res => {
      assert.equal(true, res.json.ok);
    });
    done();
  });
});