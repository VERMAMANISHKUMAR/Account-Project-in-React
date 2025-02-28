const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DATABASE CONNECTED');
  } catch (err) {
    console.error('DATABASE ERROR:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
