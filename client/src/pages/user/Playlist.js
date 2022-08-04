import React, { useState, useEffect} from 'react'
import { useLocation,useParams } from 'react-router-dom'
import quertyString from 'query-string'
import axios from 'axios'
import MusicList from '../../components/user/MusicList'
import { Box,Typography, Modal  } from '@mui/material'
import SongForm from '../../components/user/SongForm'

import PlaylistHeading from '../../components/user/PlaylistHeading'
function Playlist() {
	const params = useParams()
	const {id} = params
	const [playlist,setPlaylist] = useState({})
	const [songModal,setSongModal] = useState(false)
	const [editable,setEditable] = useState(false)
	const fetchPlaylist = async() =>{
		const response = await axios({
			url: `/user/playlist?_id=${id}`
		})
		setPlaylist(response.data.playlist)
	}
	
	useEffect(()=>{
		fetchPlaylist()
	},[])
    return (
		<div className='playlist-page'>
			<PlaylistHeading 
				title={playlist.title} 
				poster={playlist.poster}
				description={playlist.description}
				songCount = {playlist.list && playlist.list.length}
				setEditable={setEditable}
				editable={editable}
				setSongModal={setSongModal}
			/>
			
			{playlist && playlist.list && 
				<MusicList list={playlist.list} editable={editable} />
			}
			<Modal
				open={songModal}
				onClose={()=>setSongModal(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<SongForm playlist_id={id} setSongModal={setSongModal} />
				</Box>
			</Modal>
		</div>
	)
}
export default Playlist
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

