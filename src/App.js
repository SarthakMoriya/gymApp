import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import Home from './pages/Home'
import ExcerciseDetail from './pages/ExcerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
    return (
        <Box >
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercises/:id' element={<ExcerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App