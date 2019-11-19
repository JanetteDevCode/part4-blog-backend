const dotenv = require('dotenv');

if (dotenv.config().error) {
  console.log('no .env file detected');
}

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT
};