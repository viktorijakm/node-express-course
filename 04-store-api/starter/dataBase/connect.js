const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    //useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    //useUnifiedTopology: true,
    //deprecited in the MongoDB Node.js driver version 4.0.0 and above
  });
};

module.exports = connectDB;
