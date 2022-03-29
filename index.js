const express = require('express')
const app = express()
const livre = require('./db.json')


app.get('/livre', (req,res) => {
    res.status(200).json(livre)
})
app.get('/livre/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const titre = livre.find(titre => titre.id === id)
    res.status(200).json(titre)
})


app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})