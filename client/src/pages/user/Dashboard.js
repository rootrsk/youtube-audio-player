import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import PlaylistList from '../../components/user/PlaylistList'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import PlaylistForm from '../../components/user/PlaylistForm';
function Dashboard() {
    const [playlists,setPlaylists] = useState([])
    const [playlistModal,setPlaylistModal] = useState(false)
    const fetchHandler = async()=>{
        const response = await axios({
            url:'http://localhost:3001/user/playlists',
            method:'get'
        })
        if (response.data && response.data.playlists) {
            setPlaylists(response.data.playlists)
        }
    }
    const fetchPlaylist = async()=>{
        
    }
    useEffect(()=>{
        fetchHandler()
    },[])
    return (
        <div>
            <h2>Dashboard</h2>
            <PlaylistList playlists={playlists} />
            <Modal
				open={playlistModal}
				onClose={()=>setPlaylistModal(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<PlaylistForm setPlaylistModal={setPlaylistModal} />
				</Box>
			</Modal>
            <Fab 
                color="primary" 
                aria-label="add" 
                style={{
                    position:'fixed',
                    bottom:120,
                    right:20
                }}
                onClick={()=>setPlaylistModal(!playlistModal)}
            >
                <AddIcon  />
            </Fab>
        </div>
    )
}
export default Dashboard

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