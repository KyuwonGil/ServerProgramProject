const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use('/api', (req, res) => res.json({type:'bryan'}))

app.listen(port, () => console.log(`express is running on ${port}`))