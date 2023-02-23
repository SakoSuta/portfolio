const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    seo:{
        title: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
    },
    slug:{ 
        type: String, 
        required: true, 
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    coverImage:{
        type: String,
        required: true,
    },
})

const Work = mongoose.model('Work', WorkSchema)
module.exports = Work