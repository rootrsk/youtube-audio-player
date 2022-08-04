import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { patchApi, postApi } from '../../utils/userApi'
function SongForm({playlist_id,setSongModal}) {
    const [url,setUrl] = useState('')
    const [loading,setLoading] = useState(false)
    const addHandler = async()=>{
        setLoading(true)
        const {error,data} = await patchApi('/user/playlist',{
            _id:playlist_id,
            yt_url:url
        })
        console.log(data,error)
        setLoading(false)
        if(error){
            
        }
        setSongModal(false)
    }
    return (
        <div>
            <h2>Song Form</h2>
            <TextField 
                id="outlined-basic" 
                label="Youtube URL" 
                variant="outlined" 
                fullWidth
                onChange={e=>setUrl(e.target.value)}
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
                    
                >Add Song</LoadingButton>
            </div>
            
        </div>
    )
}

export default SongForm