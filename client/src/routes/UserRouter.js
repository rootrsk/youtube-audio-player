import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/user/Header'
import Dashboard from '../pages/user/Dashboard'
import Playlist from '../pages/user/Playlist'
import Profile from '../pages/user/Profile'
function UserRouter() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/playlist/:id' element={<Playlist />} />
            </Routes>
        </div>
    )
}

export default UserRouter