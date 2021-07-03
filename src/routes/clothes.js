'use strict';

const express = require('express');
const DataCollection = require('../models/data-collection-class');
const ClothesModel = require('../models/clothes');
const clothes = new DataCollection(ClothesModel);

let router = express.Router();

router.get('/', readClothes);
router.get('/:id', readClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

// Functions 

async function readClothes(req, res, next) {
  try {
    let id= req.params.id;
    let resObj = await clothes.read(id);
    res.json(resObj);
  }catch (error){
    next(error);
  }
}

async function createClothes(req, res, next) {
  try {
    let clothesObj = req.body;
    let resObj = await clothes.create(clothesObj);
    res.json(resObj);
  }catch (error){
    next(error);
  }
}

async function updateClothes(req, res, next) {
  try {
    let clothesObj = req.body;
    let id = req.params.id;
    let resObj = await clothes.update(id,clothesObj);
    res.json(resObj);
  }catch (error){
    next(error);
  }
}

async function deleteClothes(req, res, next) {
  try {
    let id = req.params.id;
    let resObj = await clothes.delete(id);
    res.json(resObj);
  }catch (error){
    next(error);
  }
}

module.exports = router;
