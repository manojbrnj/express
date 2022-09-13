const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      process.env.MONGO_URL || 'mongodb://localhost:27017/devcamper',
      {
        useNewUrlParser: true,
      }
    );
    console.log(`mongoDB connected${con.connection.host}`.cyan.underline.bold);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
