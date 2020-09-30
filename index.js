const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const PORT = 6000;
const uri = "mongodb://localhost:27017/7ElevenStores";
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const server = app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
const morgan = require('morgan');
const routes = require('./routes');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});
mongoose.connection.once("open", () => {
    console.log("DB connected");
  });

  app.use('/',routes);