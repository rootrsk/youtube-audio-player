const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim: true,
    },
    description:{
        type:String,
        trim:true
    },
    poster:{
        type:String,
    },
    list:[{
        title:{
            type: String,
            required: true,
            trim: true
        },
        thumbnail:{
            type: String,
            required: true,
            trim: true
        },
        description: {
            type : String,
            trim : true
        },
        url : {
            type : String
        }
    }],
    user:{
        type: String
    }
})

module.exports = mongoose.model('Playlist',playlistSchema)