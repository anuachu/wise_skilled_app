const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


const logger = require('./middlewares/logger')

app.listen(PORT,
  () => console.log(`server listening to port ${PORT}`)
)

app.use(logger)
app.use(express.static('client'))
app.use(express.json())