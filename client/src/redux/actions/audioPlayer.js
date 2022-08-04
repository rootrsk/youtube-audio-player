import { 
    MUSIC_PLAYER_PLAY,
    MUSIC_PLAYER_PAUSE,
    MUSIC_PLAYER_PLAY_NOW
} from '../constants/audioPlayer'
import { createAction } from '@reduxjs/toolkit'
import ytdl from 'ytdl-core';
import store from './../store'
import { postApi } from '../../utils/userApi'
/**
 * @params {String} url - url of youtube video
 * @return { null } 
 */
export async function playNow(url){
    
    const {data,error} = await postApi('/user/song-info',{yt_url:url})
    // const info = await ytdl.getInfo(url)
    // let format = ytdl.chooseFormat(info.formats, {
    //     quality: 'highestaudio'
    // })
    // const audioInfo = {
    //     title: info.videoDetails.title,
    //     description: info.videoDetails.description,
    //     thumbnail: info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1].url,
    //     url: req.body.yt_url,
    //     src: format.url
    // }
    // console.log(audioInfo)
    if(error){
        return
    }

    store.dispatch({
        type:MUSIC_PLAYER_PLAY_NOW,
        payload:data
    })
    console.log(data,error)
}
export async function play(e){
    console.log(e)
    store.dispatch({
        type:'SET_CURRENT_PLAYING',
        payload:e
    })
    store.dispatch({
        type: MUSIC_PLAYER_PLAY,
    })
}
export async function pause() {
    store.dispatch({
        type: MUSIC_PLAYER_PAUSE,
    })
}


