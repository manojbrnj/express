exports.logger = (req, res, next) => {
  console.log('logger middle ware');
  next();
};
