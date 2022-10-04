const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

//Controllers
const profilesController = require('./controllers/profiles_controller')
const logger = require('./middlewares/logger')

app.listen(PORT,
  () => console.log(`server listening to port ${PORT}`)
)

app.use(logger)
app.use(express.static('client'))
app.use(express.json())

app.use('/api/profiles', profilesController)