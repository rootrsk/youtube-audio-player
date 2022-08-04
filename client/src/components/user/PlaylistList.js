import React from 'react'
import PlaylistItem from './PlaylistItem'
import '../../css/playlist.css'
function PlaylistList({playlists}) {
    return (
        <div className='playlist_container'>
            {playlists && playlists.map((playlist,index)=>{
                return <PlaylistItem playlist={playlist} key={index} />  
            })}
        </div>
    )
}
export default PlaylistList