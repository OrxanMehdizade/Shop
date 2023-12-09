import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import GoodComponent from './GoodComponent';
import AdminComponent from './AdminComponent';
import RecipientComponent from "./RecipientComponent";
import '../StyleCss/shopMain.css'

const Home = () => {
    return (
        <div className='ShopMainDiv'>
            <header className='HeaderCss'>
                <nav>
                    <ul className={'MainUlCss'}>
                        <Link id="GoodID" to="GoodComponent"></Link>
                        <Link id="RecipientID" to="RecipientComponent">Recipient</Link>
                        <Link ID="AdminID" to="AdminComponent">Admin </Link>
                    </ul>
                </nav>
            </header>
            <main className='MainCss'>
                <Routes>
                    <Route path='/' element={<GoodComponent/>}/>
                    <Route path='GoodComponent' element={<GoodComponent/>}/>
                    <Route path="RecipientComponent" element={<RecipientComponent/>}/>
                    <Route path="AdminComponent" element={<AdminComponent/>}/>
                </Routes>
            </main>
        </div>
    );
};

export default Home;