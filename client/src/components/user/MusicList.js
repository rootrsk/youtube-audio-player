import axios from 'axios'
import React,{ useState, } from 'react'
import AudioPlayer from '../AudioPlayer'
import MusicItem from './MusicItem'
import '../../css/playlist.css'
function MusicList({list,editable}) {
    const [song,setSong] = useState(null)
    const fetchMusicDetails = async(url)=>{
        const response = await axios({
            url: `http://localhost:3001/user/player?url=${url}`,
            method:'get',
        })
        setSong(response.data.song_details)
    }
    return (
        <div>
            {
                song && 
                <AudioPlayer song={song} />
            }
            {list && 
                list.map((song,index)=>{
                    return <MusicItem 
                        song={song} 
                        playSong={fetchMusicDetails} 
                        index={index}
                        key={index} 
                        editable={editable}
                    />
                })
            }            
        </div>
    )
}

export default MusicList

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth:700,
    width: '95%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};