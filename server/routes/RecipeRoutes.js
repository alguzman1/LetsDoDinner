const express = require('express')
const Router = express.Router()
const mongoose = require('mongoose')
const Recipe = require('../models/Recipe')

Router.route(`/http://food2fork.com/api/get`)
  .get((req, res) => {
    Recipe.find((err, recipe) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESSUL F2F API GET', data: recipe})
      }
    })
  })

Router.route('/http://food2fork.com/api/search')
.get((req, res) => {
  Recipe.find((err, recipe) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESSUL F2F API SEARCH', data: recipe})
    }
  })
})

module.exports = Router