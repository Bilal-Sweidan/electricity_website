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

app.get('/projects', async (req, res) => {
    try {
        const projects = await Projects.find()
        console.log(projects)
        res.status(200).json({ "status": true , "projects" : projects})
    } catch (err) {
        console.error(err)
    }
})
app.get('/contact', async (req, res) => {
    try {
        const info = await Contact_info.find()
        res.status(200).json({ "status": true, "contact_info": info[0]})
    } catch (err) {
        console.error(err)
    }
})

app.listen(process.env.PORT || 4000, () => {
    mongoose.connect(process.env.DATA_CONECTION_STRING)
        .then(res => {
            console.log("connected")
})
    .catch(e => {
        console.log(e)
    })
})

