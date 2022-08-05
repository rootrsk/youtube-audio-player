import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
function Homepage() {
    const count = useSelector((state) => state)
    console.log(count)
    const [open,setOpen] = useState(false)

    return (
        <div>
            <div className="main_header">
                <h1 className='home-logo'>MDUDE</h1>
                <div>
                    <Link to='/app/dashboard'>Let's Begain</Link>
                </div>
            </div>
            
            <div className='landing-div'>
                <h1 className='mdude-big'>MDUDE</h1>
            </div>
            <p
                className='pt'
            >
                MDude is a music player app which behind the scenes uses youtube api  to  play your favourate  songs. Just create a playlist and your favouate songs by copying  youtube url.This is only for fun and educational purpose we do not promote any kind of api abuse.
            </p>
            
            <div>

            </div>
        </div>
    )   
}
export default Homepage