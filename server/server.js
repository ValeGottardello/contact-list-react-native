const express = require("express")
const app = express()
const config = require("./config")
const errorHandler = require("./middleware/error_handler")

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get("/contacts", (req, res, next) => {
    Contacts.findAll()
      .then(data => res.json(data))
      .catch(next)
})
  
app.post("/contacts", (req, res, next) => {
    const { firstName, lastName, email, phone } = req.body
    Contacts.create(firstName, lastName, email, phone)
      .then(data => res.json(data))
      .catch(next)
})
  
app.delete("/contacts/:id", (req, res, next) => {

    const { id } = req.params

    Contacts.delete(id)
      .then(data => res.json(data))
      .catch(next)
})
  
app.put("contacts/:id", (req, res, next) => {
    
    Contacts.update(req.params.id, req.body)
      .then(note => res.json(note))
      .catch(next)
})

app.use(errorHandler)
  
app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})
