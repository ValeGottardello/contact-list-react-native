const express = require("express")
const app = express()
const config = require("./config")
const errorHandler = require("./middleware/error_handler")
const Contacts = require("./models/contacts")
const cors = require('cors')

app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
})
app.use(cors())

app.get("/contacts", (req, res, next) => {
    Contacts.findAll()
      .then(data => res.json(data))
      .catch(next)
})
  
app.post("/contacts", (req, res, next) => {

    Contacts.create(req.body)
      .then(data => res.json(data))
      .catch(next)
})
  
app.delete("/contacts/:id", (req, res, next) => {

    const { id } = req.params
    Contacts.delete(id)
      .then(data => res.json(data))
      .catch(next)
})
  
app.put("/contacts/:id", (req, res, next) => {
  const { id } = req.params
    Contacts.update(req.params.id, req.body)
      .then(data => res.json(data))
      .catch(next)
})

app.use(errorHandler)
  
app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})
