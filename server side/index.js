const express = require('express')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
const env = require("dotenv").config()

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const { Admin, Contact_info , Projects } = require('./Schema/Schema')

app.get('/', async (req, res) => {
    try {
        const info = await Contact_info.find()
        const projects = await Projects.find()
        console.log(projects)
        res.status(200).json({ "status": true, "contact_info": info[0] , "projects" : projects})
    } catch (err) {
        console.error(err)
    }
})

app.listen(3000, () => {
    mongoose.connect(process.env.DATA_CONECTION_STRING)
        .then(res => {
            console.log("connected")
})
    .catch(e => {
        console.log(e)
    })
})

