import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Ripples from 'react-ripples'
function PlaylistHeading({title,description,poster,songCount,setEditable,setSongModal}) {
    return (
        <div className='playlist_header'
        // style={{
        //     backgroundImage: 'url'+'('+poster+')'
        //   }}
        >
            <div className="playlist_header-poster">
                <img src={poster} alt="" />
                <div className='blue-poster'></div>
                <div className='blue-poster2'></div>
            </div>
            <div className="playlist_header-description">
                <p className='mt5'>Playlist</p>
                <p className="playlist_header-title">{title}</p>
                <p className="playlist_header-details">{description}</p>
                <p className="playlist_header-details">Songs : {songCount}</p>
                
            </div>
            <div className='edit pointer'
                style={{position:'absolute',right:'40px',bottom:'10px',zIndex:20}}
            >
                <Ripples 
                    style={{
                        borderRadius:'30px%',
                        overflow:'hidden'
                    }}
                    onClick={()=>setSongModal(true)}
                >
                    <AddCircleIcon
                        style={{
                            borderRadius:'50px',
                            overflow:'hidden'
                        }}
                        fontSize={'medium'}
                    />
                </Ripples>
            </div>
            <div className='edit pointer'
                style={{position:'absolute',right:'10px',bottom:'10px',zIndex:20}}
            >
                <Ripples 
                    style={{
                        borderRadius:'30px%',
                        overflow:'hidden'
                    }}
                    onClick={()=>setEditable(p=>!p)}
                >
                    <EditIcon
                        style={{
                            borderRadius:'50px',
                            overflow:'hidden'
                        }}
                        fontSize={'medium'}
                    />
                </Ripples>
            </div>
        </div>
    )
}

export default PlaylistHeading