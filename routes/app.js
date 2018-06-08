'use strict'
const express = require('express')
const { sendFood } = require('../controllers/food')
const api = express.Router()

api.post('/food', sendFood)


module.exports = api