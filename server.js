const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});
