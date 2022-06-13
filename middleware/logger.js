const logger = (req, res, next) => {
  console.log('req: ',  req);
  console.log('res: ',  res);
  next();
}


module.exports = logger;