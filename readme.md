This is the read me file for Egyfwd & Udacity Scholarship Program
Advanced Web Development - Full Stack track
February 2022 Cohort
Author: FatmaElzahraaMohamedZiwar

Backend Development using Nodejs Course
Project: Image Processing API
Submission Deadline: 2022-02-23

Functionality: REST API resizes original image into a new requested by user dimensions, saved and displayed afterwards.
Requirement: If the image were processed before to be resized to the same dimensions, the API get it and display it from cached version. Otherwise normal processing happens.

Technologies used:
OS: Windows 11
Development Environment:
IDE: Visual Studio Code
using NodeJS, Jasmine, Express and Sharp
Front end: default.html gallery has images shown and below everyone the user can add the required width and height to be applied.
Afterwards the image is processed and displayed.

Environment Development Dependencies:
Prettier
Lint
Jasmine
Supertest

Production Dependencies:
Express
Sharp

Project folder and files Structure:
build: TS transpiled files to JS
images:{full: orignal size images},{thumbs: resized images}
node_modules
spec:{support{jasmine.json}}
src:{index.ts project server listening at API entry point, {routes:{{index.ts used as Router}, {api: resizeImg.ts used as middleware}}},{tests{indexSpec,{api:resizeImgSpec},{utilities:resizingImageSpec}}},{utilities: logger.ts,resizingImage.ts}}
.eslintignore
.eslintrc
.eslintrc.js
.prettierignore
.prettierrc
default.html
package-lock.json
readme.md
tsconfig.json

Scripts avaiable to use:
npm run start
npm run test

API Entry point: http://localhost:3000/images/full/santamonica.jpg
Case: Resizing the image to 200 x 200
Resultant: http://localhost:3000/api/resizeImg?imgname=santamonica.jpg&width=200&height=200

Validation:
on user input dimensions to be positive values
on existing endpoint

TypeScript Jasmine started
server started at http://localhost:3000
/api/resizeImg?imgname=santamonica.jpg&width=200&height=200 was visited.
Checking Positive Dimensions
200 200 true
File resized and saved successfully santamonica

  Test Suite 2 endpoint response
    √ Spec dsc image size
Checking Positive Dimensions
-5 200 false
    √ Spec dsc image negative Dimensions
Testing if
Sorry, please enter valid numbers in Dimensions.
    √ Spec dsc image string Dimensions width or Height are not numbers
Testing if
Sorry, please enter valid numbers in Dimensions.
    √ Spec dsc image string Dimensions width or Height are not numbers

/api was visited.
  Test Suite endpoint response
    √ Spec dsc gets api endpoint

  Test Suite Resizing Image Truthy
    √ Spec dsc image size

Executed 6 of 6 specs SUCCESS in 0.117 sec.