/* Write the code for a small nodeJS app called “Slow Waiter” that receives an http request with a JSON
containing an object { foodType: <string>, timeToDeliver: <date>, beverage: <int> } which processes
the object in the following manner:
- The date format is hh:mm:ss where h = hours, m = minutes and s = seconds.
- The beverage values go from 0 to 4 and each corresponds to water, coke, soda and juice respectively.
You must associate each value with its corresponding string.
You must print three console logs in the following manner:
1) First console log is immediate after execution of the app and the output must be: “The waiter has
taken your order and will bring your food in 8 seconds”
2) Second console log comes 3 seconds later and the output must be: “Here is the <beverage> you
ordered”
3) Third console log must be shown 7 seconds later after the beverage, and the output must be: “I am
sorry for the delay, here is the <foodType> you ordered" */

'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const food = require('./routes/app')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('API run in http://localhost:3000/')
    console.log('Endpoint run in http://localhost:3000/api/v1/food')
})

app.use('/api/v1', food)
