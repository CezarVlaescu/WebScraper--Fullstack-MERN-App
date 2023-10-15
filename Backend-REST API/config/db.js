// Database connection (we can add also API Keys, environment variables)

const mongoose = require('mongoose'); // module for MongoDB
const config = require("./default.json")

const mongoURL = config.mongoURL; // database url 

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(result => console.log('connect to db'))
  .catch(err => console.log(err)); // connection to db and async 

module.exports = mongoose;