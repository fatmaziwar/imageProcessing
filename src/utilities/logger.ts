//Logger to log endpoints visits on the Console
//Importing Express Module
import express from 'express';

//logger Middleware calls next at the end
const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const url = req.url;
  console.log(`${url} was visited.`);
  next();
};
//Exporting the logger Module
export default logger;
