const mongoose = require('mongoose');

require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@tourfrancia.ekuog.mongodb.net/TourFrancia?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose;
