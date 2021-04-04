const express = require('express');
const logger = require('./logger');
const cors = require('cors');
const mongoose = require('mongoose');
const KEYS = require('./config/keys');

const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/user', authRoutes);

mongoose.connect(KEYS.DB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  logger.dbStarted();
  app.listen(PORT, (error) => {
    if(error){
      logger.error(error);
    }else{
      logger.appStarted(PORT, 'localhost');
    }
  });
})
.catch();
