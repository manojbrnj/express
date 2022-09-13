const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Bootcamp = require('./models/Bootcamp');
require('colors');
dotenv.config({ path: './config.env' });
mongoose.connect(
  process.env.MONGO_URL || 'mongodb://localhost:27017/devcamper',
  {
    useNewUrlParser: true,
  }
);

//read json files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);
//import in db
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('Data imported...'.green.inverse);
    //exit express app
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log('Data destroyed...'.red.inverse);
    //exit express app
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
