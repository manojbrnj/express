const express = require('express');
const app = express();
//route files import here
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const bootcamps = require('./routes/index');
//express type app:Express
//create route aap.get
app.use('/api/v1/bootcamps', bootcamps);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});
