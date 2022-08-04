import React, { useState } from 'react'
import { useNavigate,useLocation } from "react-router-dom";
const poster = 'https://voices.shortpedia.com/wp-content/uploads/2021/05/Tum-hi-aana-Marjaavan.jpg'
import EditIcon from '@mui/icons-material/Edit';
import Ripples from 'react-ripples'
import { Box, Modal } from '@mui/material';
import PlaylistForm from './PlaylistForm';
function PlaylistItem({playlist}) {
    const navigate = useNavigate()
    const location = useLocation()
    const [playlistModal,setPlaylistModal] = useState(false)
    
    // console.log(navigate)
    const goToRoute = ()=>{
        navigate(`/app/playlist/${playlist._id}`)
    }
    return (
        <>
            <div className='playlist_card'>
                <img 
                    src={playlist.poster?playlist.poster:poster} 
                    className='playlist_poster pointer' 
                    onClick={()=>goToRoute()}
                />
                <div className='flex jcb'>
                    <p style={{fontWeight:600}}>{playlist.title}</p> 
                    <div className='edit'>
                        <Ripples 
                            style={{
                                borderRadius:'30px%',
                                overflow:'hidden'
                            }}
                            onClick={()=>setPlaylistModal(true)}
                        >
                            <EditIcon
                                style={{
                                    borderRadius:'50px',
                                    overflow:'hidden',
                                    
                                }}
                                fontSize={'20px'}
                            />
                        </Ripples>
                    </div>
                </div>
                
                <p style={{overflow:'hidden',fontSize:12,fontWeight:400}}>{playlist.description}</p>
                <Modal
                    open={playlistModal}
                    onClose={()=>setPlaylistModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <PlaylistForm setPlaylistModal={setPlaylistModal} playlist={playlist} />
                    </Box>
			</Modal>
            </div>
        </>
    )
}
export default PlaylistItem
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