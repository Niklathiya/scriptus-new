import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from "./pages/Home"

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
