import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
    return (
        <>
            <header className='header'>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </header>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/posts" element={<Blogpage />}/>
                <Route path="/about" element={<Aboutpage />}/>
                <Route path="*" element={<Notfoundpage/>}/>
            </Routes>
        </>
    );
}

export default App;
