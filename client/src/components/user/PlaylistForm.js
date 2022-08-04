import { Button, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { postApi } from '../../utils/userApi';
function PlaylistForm({setPlaylistModal,playlist}) {
    // console.log(playlist._id)
    const [title,setTitle] = useState(playlist && playlist.title || '')
    const [description,setDescription] = useState(playlist && playlist.description || '')
    const [poster,setPoster] = useState(playlist && playlist.poster || '')
    const [loading,setLoading] = useState(false)
    const addHandler = async()=>{
        setLoading(true)
        const {error,data} = await postApi('/user/playlist',{
            title,
            description,
            poster,
            playlist_id:playlist?playlist._id:null
        })
        console.log(data,error)
        setLoading(false)
        if(error){
            console.log(error)
        }
        setPlaylistModal(false)
    }
    return (
        <div className='playlist-form' >
            <h2>Add Playlist</h2>
            <TextField 
                id="outlined-basic" 
                label="Playlist Title" 
                variant="outlined" 
                fullWidth
                onChange={e=>setTitle(e.target.value)}
                value={title}
                sx={{marginTop:2}}
            />
            <TextField 
                id="outlined-basic" 
                label="Playlist Description" 
                variant="outlined" 
                fullWidth
                onChange={e=>setDescription(e.target.value)}
                value={description}
                sx={{marginTop:2}}
            />
            <TextField 
                id="outlined-basic" 
                label="Playlist Poster" 
                variant="outlined" 
                fullWidth
                onChange={e=>setPoster(e.target.value)}
                value={poster}
                sx={{marginTop:2}}
            />
            <div
                style={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'flex-end'

                }}
            >
                <LoadingButton
                    sx={{
                        m:2,
                    }}
                    variant='contained'
                    onClick={addHandler}
                    loading={loading}
                    
                >
                    {(playlist&&playlist._id) ? 'Update':'Add Playlist'}
                    </LoadingButton>
            </div>
        </div>
    )
}

export default PlaylistForm