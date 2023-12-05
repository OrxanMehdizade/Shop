import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexNav from "./NavBar/IndexNav";
import HeaderComponent from "./HeaderComponent";

function Good() {
    return (
        <div className='grid-container'>
            <Routes>
                <Route path="/" element={<IndexNav />} />
                <Route path="HeaderComponent" element={<HeaderComponent />} />
            </Routes>
        </div>
    );
}

export default Good;