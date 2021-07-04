'use strict';
require('dotenv').config();
const port = process.env.PORT;
const server = require('./src/server');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser : true,
  useUnifiedTopology : true,
}).then (()=>{
  server.start(port);
}).catch (e => {
  console.error ('Connection Error', e.message);
});

