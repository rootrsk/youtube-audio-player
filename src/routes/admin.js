const express = require('express')
const router = express.Router()
const ytdl = require('ytdl-core')

router.get('/',async(req,res)=>{
    try {
        const url = 'https://www.youtube.com/watch?v=BcqxLCWn-CE&ab_channel=Lauv'
        const info = await ytdl.getInfo(url)
        let format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
        res.json({
            status:'success',
            audio_details:{
                title: info.videoDetails.title,
                description: info.videoDetails.description,
                thumbnail: info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1].url,
                url:format.url,
            }
        })
    } catch (e) {
        res.json({
            status:'failed',
            error:e.message
        })
    }
})

module.exports = router