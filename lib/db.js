const mongoose = require('mongoose');

require('dotenv').config();

const { USERNAME, PASSWORD } = process.env;

mongoose.connect(
  `mongodb+srv://${USERNAME}:${PASSWORD}@tourfrancia.ekuog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose;
