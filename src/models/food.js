'use strict';

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String },
  quantity : { type : String},
});

const FoodModel = mongoose.model ('food',foodSchema);

module.exports = FoodModel;
