const errorHandler = (err, req, res, next) => {
  console.log(err.stack.red);
  console.log(err.name);
  res.status(err.statusCode).json({ success: false, error: err.message });
};

module.exports = errorHandler;

/*
api call => err=> next(err)

app.use(errorHandler)

here are creating class for customer error and will create a new Error ('msg',statuscode)
class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;

api call => err=> next(new ErrorResponse('error aaya hai ',500))

app.use(errorHandler)




*/
