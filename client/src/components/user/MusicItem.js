import React from 'react'
import { playNow } from '../../redux/actions/audioPlayer'
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import { useSelector } from 'react-redux'
import { deleteApi } from '../../utils/userApi';

function MusicItem({song,index,editable}) {
    const playingSong = useSelector((state)=>state.audioPlayer)
    const deleteSong = async()=>{
        const data = deleteApi('/song',{
            
        })
    }
    return (
        <div className='song_card' >
            <div>
                {
                    <div className='song_card_index' >
                        {
                            playingSong.currentlyPlaying &&
                            playingSong.isPlaying && 
                            playingSong.currentlyPlaying.name === song.title?
                            <img src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f93a2ef4.gif" alt="" />: index+1
                        }
                    </div>
                }   
            </div>
            
            <img src={song.thumbnail} alt={song.title} className='song_thumbnail' />
            <div className='song-title' >
                <p>{song.title}</p>
            </div>
            <div
                style={{
                    color:'white',
                    position:'absolute',
                    right:'20px',
                    zIndex:5
                }}
            >
                <IconButton
                    onClick={()=>playNow(song.url)}
                >
                    <PlayCircleIcon
                        style={{
                            color:'white'
                        }}
                    />
                </IconButton>
                {editable && <IconButton
                    onClick={()=>playNow(song.url)}
                >
                    <DeleteIcon
                        style={{
                            color:'white'
                        }}
                    />
                </IconButton>}
            </div>
        </div>
    )
}
export default MusicItem