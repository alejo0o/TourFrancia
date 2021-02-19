const express = require('express');
const cors = require('cors');

require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
