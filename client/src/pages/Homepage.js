import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
function Homepage() {
    const count = useSelector((state) => state)
    console.log(count)
    const [open,setOpen] = useState(false)

    return (
        <div>
            <h2>Homepage</h2>
            <Link to='/app/dashboard'>Dashboard</Link>
            {open && <div style={{
                position:'fixed',
                left:0,
                right:0,
                top:0,
                bottom:0,
                // background:'#fff',
                // opacity:.6,
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
                onClick={()=>setOpen(false)}
            >
                <div 
                    style={{
                        background:'#fff',
                        border:'1px solid black',
                        padding:30,
                        position:'relative',
                        zIndex:5
                    }}
                >
                    <h2>Difficulties</h2>
                    <div>
                        <li>High</li>
                        <li>Medium</li>
                        <li>Low</li>
                    </div>
                    <button onClick={()=>setOpen(false)}>close</button>    
                </div>
                
            </div>}
            <button onClick={()=>setOpen(!open)}>
                open
            </button>
        </div>
    )   
}
export default Homepage