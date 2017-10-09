/* eslint-disable no-unused-vars */
const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const uuid = require('uuid/v4')

MongoClient.connect('mongodb://127.0.0.1/library', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const notes = db.collection('notes')

  app.use(bodyParser.json())

  app.post('/notes', (req, res) => {
    req.body.id = uuid()
    notes.insertOne(req.body, (err, result) => {
      if (err) {
        console.error(err)
        res.sendStatus(500)
      }
      else {
        console.log(result)
        res.sendStatus(201)
      }

    })

  })
  app.listen(3000, () => console.log('listening on 3000'))
})
