const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const weatherRouter = require('./routes/routes')

dotenv.config()
const app = express()

const PORT = process.env.PORT || 8000

app.use("/api", weatherRouter)


app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`)
})