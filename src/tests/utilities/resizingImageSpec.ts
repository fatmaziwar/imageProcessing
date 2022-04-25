//Testing
//list of importing Modules
import resizingImage from '../../utilities/resizingImage';

describe('Test Suite 3 Resizing Image santamonica.jpg to 200 x 200 Using Sharp expected to be Truthy', () => {
  it('Spec dsc image size in resizingImage ', async () => {
    const resIm = await resizingImage('santamonica.jpg', 200, 200);
    expect(resIm.status).toBeTruthy();
  });
});
