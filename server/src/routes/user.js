const express = require('express')
const router = express.Router()
const ytdl = require('ytdl-core')
const Playlist = require('../models/playlist')

router.get('/playlist',async(req,res)=>{
    try {
        if(!req.query._id){
            return res.json({
                status:'failed',
                error:'Playlist id is reqired'
            })
        }
        const playlist = await Playlist.findOne({_id: req.query._id})
        if (!playlist){
            return res.json({
                status:'falied',
                error:'Could not find the playlist.'
            })
        }
        res.json({
            status:'success',
            playlist
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})
router.post('/playlist',async(req,res)=>{
    console.log(req.body)
    try {
        if(!req.body.title){
            return res.json({
                status:'failed',
                error:'Playlist title is required'
            })
        }
        if(req.body.playlist_id){
            const playlist = await Playlist.findByIdAndUpdate(req.body.playlist_id,req.body)
            return res.json({
                playlist,
                status:'success',
                message:'Updated Successfully'
            })
        }
        const playlist = new Playlist({
            title: req.body.title,
            description: req.body.description,
            poster: req.body.poster
        })
        await playlist.save()
        res.json({
            playlist
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})
router.delete('/playlist',async(req,res)=>{
    try {
        if(!req.body.playlist_id){
            return res.json({
                status:'failed',
                error:'Please Provied PlayistID'
            })
        }    
        const playlist = await Playlist.findByIdAndRemove(req.body.playlist_id)
        res.json({
            status:'success',
            playlist
        })
    } catch (error) {
        return res.json({
            status:'failed',
            error:'Somethig went wrong'
        })
    }
    
})
router.post('/song-info', async (req, res) => {
    
    try {
        if (!req.body.yt_url) {
            return res.json({
                status: 'failed',
                error: 'Url not found '
            })
        }
        const info = await ytdl.getInfo(req.body.yt_url)
        let format = ytdl.chooseFormat(info.formats, {
            quality: 'highestaudio'
        })
        res.json({
            title: info.videoDetails.title,
            description: info.videoDetails.description,
            thumbnail: info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1].url,
            url: req.body.yt_url,
            src:format.url
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

router.post('/playlist/song', async (req, res) => {
    try {
        if (!req.body.url) {
            return res.json({
                status: 'failed',
                error: 'Playlist title is required'
            })
        }
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

router.patch('/playlist', async (req, res) => {
    console.log(req.body)
    try {
        if (!req.body._id) {
            return res.json({
                status: 'failed',
                error: 'Playlist id is required'
            })
        }
        const playlist = await Playlist.findOne({_id: req.body._id})
        if (!playlist){
            return res.json({
                status:'failed',
                error:'Could not find the playlist'
            })
        }
        const info = await ytdl.getInfo(req.body.yt_url)
        let format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' })

        playlist.list = playlist.list.concat({
            title: info.videoDetails.title,
            description: info.videoDetails.description,
            thumbnail: info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1].url,
            url: req.body.yt_url,
        })
        await playlist.save()
        res.json({
            status:'success',
            playlist:playlist,

        })
    } catch (error) {
        console.log(error)
        res.json({
            error: error.message
        })
    }
})

router.get('/playlists',async(req,res)=>{
    try {
        const playlists = await Playlist.find({})
        res.json({
            status:'success',
            playlists
        })
    } catch (error) {
        res.json({
            status:'faliled',
            error:error.message
        })
    }
})

router.get('/player',async(req,res)=>{
    try {
        const url = req.query.url
        if(!url){
            return res.json({
                status:'failed',
                error:'Video url is required'
            })
        }
        const song_details = {
            "title": "Raftaar x Brodha V - Naachne Ka Shaunq",
            "thumbnail": "https://i.ytimg.com/vi_webp/QvswgfLDuPg/maxresdefault.webp",
            "url": "https://rr2---sn-gwpa-25ue7.googlevideo.com/videoplayback?expire=1651749721&ei=-V5zYqHyAbmv4t4P5dWyoAQ&ip=157.35.60.145&id=o-ADHblpBbcPPqcvjtmBqrqnr9KDLLuSphnTeMgK0OLX54&itag=251&source=youtube&requiressl=yes&mh=v2&mm=31%2C29&mn=sn-gwpa-25ue7%2Csn-qxaelne6&ms=au%2Crdu&mv=m&mvi=2&pl=21&pcm2=no&initcwndbps=178750&spc=4ocVC1MNHA35qV-XliNyyz1cCNR3&vprv=1&mime=audio%2Fwebm&ns=uKBpXFsfRfA037k_LYHrobsG&gir=yes&clen=3922619&dur=221.941&lmt=1575194007465390&mt=1651727808&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=DvmfEUoFi5qzAg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgGPsJ7PXRA7qW9DRaOUNqm71TxuHW33b-GjEaHpEIp4oCIQDdS3mOkotuLcGdOfwHUFw9NC5fVt395CEucpW9JvEaow%3D%3D&sig=AOq0QJ8wRQIgFku8cfLfmPL5OEe2B0tm3h-ROZsdHPcb73JJ9StUOtcCIQDR3HyxWuWVXpKVgY9t0JS0OC0skgP01j1hfZ45vOLI5w%3D%3D"
        }
        res.json({
            status:'success',
            song_details
        })
    } catch (e) {
        res.json({
            status:'failed',
            error:e.message
        })
    }
})
module.exports = router