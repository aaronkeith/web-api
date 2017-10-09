/* eslint-disable no-unused-vars */
const express = require('express')
const bodyParser = require('body-parser')

const notes = []
let noteID = 01
const app = express()

app.use(bodyParser.json())

app.post('/notes', (req, res) => {
  req.body.id = noteID++
  notes.push(req.body)
  res.sendStatus(201)
})


app.listen(3000, () => console.log('listening on 3000'))
