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

})

module.exports = app;

app.listen(port)
console.log('listening on port: 3000');
