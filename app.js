require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const tourDatesRouter = require('./src/routes/tourdDatesRoute')
const app = express()
const port = process.env.PORT || 4000

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/tourdates', tourDatesRouter)

app.listen(port, () => {

    console.log(`Server running at ${port}`)
})
