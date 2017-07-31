const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000;

app.get('/api/days/:day', (req, res) => {
  const { day } = req.params

  const daysOfWeek = {
    monday   : 1,
    tuesday  : 2,
    wednesday: 3,
    thursday : 4,
    friday   : 5,
    saturday : 6,
    sunday   : 7
  }

  if(daysOfWeek.hasOwnProperty(`${day}`)) {
    res.format({
      'application/text': () => {
        res.json({
          response: daysOfWeek[`${day}`]
        })
      }
    })
  } else {
    res.format({
      'application/text': () => {
        res.status(400).json({
          response: `'${day}' is not a valid day!`
        })
      }
    })
  }
})

app.post('/api/array/concat', (req, res) => {
  const { array1, array2 } = req.body

  if(Array.isArray(array1) && Array.isArray(array2)) {
    const newArray = array1.concat(array2)
    res.json({ "result": newArray })
  } else {
    res.format({
      'application/json': () => {
        res.status(400).json({
          "error": "Input data should be of type Array."
        })
      }
    })
  }
})

module.exports = app

app.listen(port)
console.log('listening on port: 3000')
