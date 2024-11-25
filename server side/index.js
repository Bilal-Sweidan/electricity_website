const express = require('express')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
// const env = require("dotenv")

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
    mongoose.connect('mongodb+srv://bilalsweidan2003:gRdnP2k3FUa27dBG@lorenz.hdwfl.mongodb.net/?retryWrites=true&w=majority&appName=lorenz')
        .then(res => {
            console.log("connected")
            // const admin = Admin.create({
            //     email : "lorenzelektrik@gmail.com",
            //     password : "123"
            // })
            // const info = Contact_info.create({
            //     facebook: "",
            //     instgrame: "",
            //     phone: "+905462063676",
            //     whatsapp: "",
            //     email: "lorenzelektrik@gmail.com",
            //     location: "",
            //     telegram: ""
            // })
            // const projects = Projects.create({
            //     coverImg : "p2",
            //     images : [
            //         "photo_1_2024-11-24_15-07-08.jpg",
            //         "photo_2_2024-11-24_15-07-08.jpg",
            //         "photo_3_2024-11-24_15-07-08.jpg",
            //         "photo_4_2024-11-24_15-07-08.jpg",
            //         "photo_5_2024-11-24_15-07-08.jpg",
            //         "photo_5_2024-11-24_15-07-08.jpg",
            //         "photo_6_2024-11-24_15-07-08.jpg",
            //         "photo_7_2024-11-24_15-07-08.jpg",
            //         "photo_8_2024-11-24_15-07-08.jpg",
            //         "photo_9_2024-11-24_15-07-08.jpg",
            //         "photo_10_2024-11-24_15-07-08.jpg",
            //         "photo_11_2024-11-24_15-07-08.jpg",
            //         "photo_12_2024-11-24_15-07-08.jpg",
            //         "photo_13_2024-11-24_15-07-08.jpg",
            //         "photo_14_2024-11-24_15-07-08.jpg",
            //         "photo_15_2024-11-24_15-07-08.jpg",
            //         "photo_16_2024-11-24_15-07-08.jpg",
            //         "photo_17_2024-11-24_15-07-08.jpg",
            //         "photo_18_2024-11-24_15-07-08.jpg",
            //         "photo_19_2024-11-24_15-07-08.jpg",
            //         "photo_20_2024-11-24_15-07-08.jpg",
            //     ],
            //     about : "asdasdasdasdafasfasfsaf"
            // })
})
    .catch(e => {
        console.log(e)
    })
console.log('done')
})

