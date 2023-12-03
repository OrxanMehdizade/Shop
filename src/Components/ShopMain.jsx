import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderComponent from "./HeaderComponent";
import MenuComponent from "./MenuComponent";
import MainComponent from "./MainComponent";
import '../StyleCss/shopMain.css';

function Good() {
    return (
        <div className='grid-container'>
            <Routes>
                <Route path='/HeaderComponent' element={<HeaderComponent />} />
                <Route path='/MainComponent' element={<MainComponent />} />
                <Route path='/MenuComponent' element={<MenuComponent />} />
            </Routes>
        </div>
    );
}

export default Good;
