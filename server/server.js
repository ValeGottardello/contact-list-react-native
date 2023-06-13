const express = require("express")
const app = express()
const config = require("./config")

app.get("/contacts", validateId, (req, res, next) => {
    Note.findOneById(req.params.id)
      .then(note => res.json(note))
      .catch(next)
})
  
app.post("/contacts/:id", validateNewNote, (req, res, next) => {
    Note.create({ content: req.body.content, color: req.body.color })
      .then(note => res.json(note))
      .catch(next)
})
  
app.delete("/contacts/:id", (req, res, next) => {
    const { id } = req.params
    Note.destroy(id)
      .then(() => res.json({ message: `note with id ${id} has been removed` }))
      .catch(next)
})
  
app.put("contacts/:id", (req, res, next) => {
    Note.update(req.params.id, req.body)
      .then(note => res.json(note))
      .catch(next)
})
  