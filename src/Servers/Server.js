const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
const route = require('./Routes/index')

app.use(cors())

app.use(bodyParser.json())
app.use('/api', route)

app.listen(port, () => console.log(`express is running on ${port}`))