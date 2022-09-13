const express = require('express');
const app = express();
const connectDB = require('./db');
const { logger } = require('./middlewares/logger');
const colors = require('colors');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/error');
//route files import here
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
connectDB();
const morgan = require('morgan');
app.use(morgan('combined'));

const bootcamps = require('./routes/index');
//express type app:Express
//create route aap.get
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger);
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Example app listening on port ${process.env.PORT || 3000}`.yellow.bold
  );
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error:- ${err.message}`);
  server.close(() => process.exit(1));
});
