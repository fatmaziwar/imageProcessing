//List of imported Modules
import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import resizingImage from '../../utilities/resizingImage';

//Using Router
const resizeImg = express.Router();

//Arrow Function to check if user entered positive new dimentions for the image
const checkIfPosDim = (widthIn: number, heightIn: number): boolean => {
  console.log('Checking Positive Dimensions');
  //Validation variable for user input
  let positiveDim = false;
  if (widthIn > 0 && heightIn > 0) {
    positiveDim = true;
  }
  console.log(widthIn + ' ' + heightIn + ' ' + positiveDim);
  return positiveDim;
};

//Async/Await function to apply requested image resizing
resizeImg.get(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    //check if the folder thumbs used for saving the new resized images exists or create it
    const dir = './images/thumbs';

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    //imageFile variables
    //Requested Width
    const width = parseInt((req.query.width as unknown) as string) || 0;
    //Requested Height
    const height = parseInt((req.query.height as unknown) as string) || 0;
    //Requested Image File Name
    const imgname = ((req.query.imgname as unknown) as string) || '';
    //Extracting the Exact File name and Extention
    const name = path.parse(imgname).name;
    const nameext = path.extname(imgname);

    //Available Image folder having all the full size images
    const imgPath = path.resolve('./images/full/' + imgname);
    //Folder for new resized images
    const imgOPath = path.resolve(
      './images/thumbs/' + name + '_' + width + '_' + height + nameext
    );

    if (!fs.existsSync(imgPath)) {
      res.send('Please provide a correct filename');
      return;
    }

    //Check if user entered positive dimensions to start processing their Request
    const validatorChk = checkIfPosDim(width, height);
    if (validatorChk) {
      try {
        //Check if file already processed to the needed size before
        if (fs.existsSync(imgOPath)) {
          //Display it directly from the cached file already saved
          res.sendFile(imgOPath);
          //log to the console that it was displayed from cached version
          console.log('File already resized before, displaying cached ' + name);
        } else {
          //otherwise the image is newly processed
          const resIm = await resizingImage(imgname, width, height);
          res.sendFile(resIm.path);
          console.log('File resized and saved successfully ' + name);
        }
      } catch (error) {
        res.json({
          width: width,
          height: height,
          imgPath: imgPath,
          imgOPath: imgOPath,
          error: error
        });
      }
    } else {
      //Log message to the console to re enter valid Dimensions
      //Redirect to the Application Homepage default.html
      console.log('Please try again entering new Valid dimensions');
      res.send('Please try again entering new Valid dimensions');
    }
  }
);

//Exporting Module
export { resizeImg, checkIfPosDim };
