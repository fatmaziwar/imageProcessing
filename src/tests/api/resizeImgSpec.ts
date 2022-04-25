//Testing
//list of importing Modules
import app from '../../index';
import supertest from 'supertest';
import { checkIfPosDim } from '../../routes/api/resizeImg';

const request = supertest(app);
describe('Test Suite 1 endpoint response', () => {
  it('Spec 1 dsc image santamonica.jpg size 300 x 200', async () => {
    const response = await request
      .get('/api/resizeImg')
      .query({ imgname: 'santamonica.jpg', width: 300, height: 200 });
    expect(response.status).toBe(200);
  });

  it('Spec 2 dsc negative Dimensions', () => {
    const resultant = checkIfPosDim(-5, 200);
    expect(resultant).toBeFalsy();
  });

  it('Spec 3 dsc image string Dimensions entered Width or Height are Falsy', async () => {
    const inputStr = 'hello123';
    const inputStr2 = 'hi456';
    const isnum = /^\d+$/.test(inputStr);
    expect(isnum).toBeFalsy();
    const isnum2 = /^\d+$/.test(inputStr2);
    expect(isnum2).toBeFalsy();
  });
  it('Spec 4 dsc image Dimensions width and Height are numbers only are OK', async () => {
    const inputStr3 = '123';
    const inputStr4 = '456';
    const isnum3 = /^\d+$/.test(inputStr3);
    expect(isnum3).toBeTruthy();
    const isnum4 = /^\d+$/.test(inputStr4);
    expect(isnum4).toBeTruthy();
  });
});
