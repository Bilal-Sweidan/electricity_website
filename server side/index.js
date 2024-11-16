const express = require('express')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())


app.listen(3000,() => {
    console.log('')
    
})

