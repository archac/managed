const request = require('supertest');
const app = require('../index');

describe('GET /names', () => {

    it('allows the GET method', (done) => {
        request(app)
            .options('/names')
            .expect('Allow', /GET/)
            .expect(200, done);
    });

    it('returns all names from the database', (done) => {
        request(app)
            .get('/names')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('returns a single name from the database', (done) => {
        request(app)
            .get('/names?criteria=jack')
            .set('Accept', 'application/json')
            .expect((res) => {
                if(res.body.length !== 1) {
                    throw new Error("Expected body length of exactly 1");
                }
            })
            .end(done);
    });
});