//List of imported Modules

import sharp from 'sharp';
import path from 'path';

export type ImageResponse = {
  path: string;
  status: boolean;
  errorMessage: string;
};
const resizingImage = async (
  filename: string,
  width: number,
  height: number
): Promise<ImageResponse> => {
  //imageFile variables
  const name = path.parse(filename).name;
  const nameext = path.extname(filename);

  //Available Image folder having all the full size images
  const imgPath1 = path.resolve('./images/full/' + filename);
  //Folder for new resized images
  const imgOPath = path.resolve(
    './images/thumbs/' + name + '_' + width + '_' + height + nameext
  );

  try {
    await sharp(imgPath1)
      .resize(width, height)
      .toFile(imgOPath);

    return {
      path: imgOPath,

      status: true,
      errorMessage: ''
    };

    //console.log('File resized and saved successfully in New File ' + name);
  } catch (error) {
    console.log(error);
    return {
      path: '',
      status: false,
      errorMessage: (error as unknown) as string
    };
  }
};
export default resizingImage;
