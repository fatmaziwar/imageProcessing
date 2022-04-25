//Testing
//list of importing Modules
import app from '../index';
import supertest from 'supertest';

const request = supertest(app);
//Test Suite
//Test Spec
describe('Test Suite 2 endpoint response', () => {
  it('Spec dsc gets api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
