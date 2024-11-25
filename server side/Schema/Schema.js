const mongoose = require('mongoose')
const { PassThrough } = require('nodemailer/lib/xoauth2')

const admin = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
})

const contact_info = new mongoose.Schema({
    facebook: {
        type: String
    },
    instgrame: {
        type: String
    },
    phone: {
        type: String,
        default: "+905462063676"
    },
    whatsapp: {
        type: String
    },
    email: {
        type: String,
        default: "lorenzelektrik@gmail.com"
    },
    location: {
        type : String
    },
    telegram: {
        type : String
    }
})
const projects = new mongoose.Schema({
    coverImg : {
        type : String
    },
    images : [String],
    about : {
        type : String
    }
})


const Admin = mongoose.model("Admin", admin)
const Contact_info = mongoose.model("contact_info",contact_info)
const Projects = mongoose.model("projects",projects)

module.exports = {
    Admin,
    Contact_info,
    Projects
}