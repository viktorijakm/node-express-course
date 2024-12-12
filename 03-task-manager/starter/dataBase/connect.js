const mongoose = require('mongoose');


// &appName=NodeExpressProjects'

const connectDB = (url) => {
return mongoose
  .connect(url,)
}

module.exports = connectDB
//   .then(() => console.log('Connected to the DB...Yeah'))
//   .catch((err) => console.log(err));
