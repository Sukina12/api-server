'use strict';

const express = require('express');
const DataCollection = require('../models/data-collection-class');
const FoodModel = require('../models/food');
const food = new DataCollection(FoodModel);

let router = express.Router();

router.get('/', readFood);
router.get('/:id', readFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

// Functions 

async function readFood(req, res, next) {
  try {
    let id= req.params.id;
    let resObj = await food.read(id);
    res.json(resObj);
  }catch (error){
    next(error);
  }
}

async function createFood(req, res, next) {
  try {
    let foodObj = req.body;
    let resObj = await food.create(foodObj);
    res.json(resObj);
  }catch (error){
    next(error);
  }
}

async function updateFood(req, res, next) {
  try {
    let foodObj = req.body;
    let id = req.params.id;
    let resObj = await food.update(id,foodObj);
    res.json(resObj);
  }catch (error){
    next(error);
  }
}

async function deleteFood(req, res, next) {
  try {
    let id = req.params.id;
    let resObj = await food.delete(id);
    res.json(resObj);
  }catch (error){
    next(error);
  }
}

module.exports = router;