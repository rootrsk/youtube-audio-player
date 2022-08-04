import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
function GeneralRouter() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/home' element={<Homepage />} />
        </Routes>
    )
}

export default GeneralRouter