const app = require('../../app');
const request = require('supertest')

describe('register',()=>{
    it('returns status code 201 if name is in body', async()=>{
        const res = await request(app).post('/user/register').send({'name':'juan'});
        expect(res.statusCode).toEqual(201);
    })
});