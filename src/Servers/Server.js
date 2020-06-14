const express = require('express')
const app = express()
//const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
const boardRoute = require('./Routes/board')
const signRoute = require('./Routes/sign')
const postRoute = require('./Routes/post')
const commentRoute = require('./Routes/comment')

//app.use(cors())

app.use(bodyParser.json())
app.use('/board', boardRoute)
app.use('/sign', signRoute)
app.use('/post', postRoute)
app.use('/comment', commentRoute)
app.listen(port, () => console.log(`express is running on ${port}`))