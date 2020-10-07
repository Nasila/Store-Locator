
const mongoose = require('mongoose');
const express = require('express');
const PORT = 5000;
const cors = require('cors');
// const uri = "mongodb://localhost:27017/7ElevenStores";
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const server = app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
const morgan = require('morgan');
const routes = require('./routes');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.ATLAS_URI;


mongoose.connect(uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});
mongoose.connection.once("open", () => {
    console.log("DB connected");
  });

  app.use('/itemlist',routes);