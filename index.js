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
  // let noteID = 1

  app.use(bodyParser.json())

  app.post('/notes', (req, res) => {
    req.body.id = uuid()
    notes.insertOne(note, (err, result) => {
      if (err) {
        console.error(err)
      }
      else {
        console.log(result)
      }

      res.sendStatus(201)
    })

    app.get('/notes', (req, res) => res.json(notes))

    db.close()

    app.listen(3000, () => console.log('Listening on 3000!'))
  })
