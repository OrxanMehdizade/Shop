import './App.css';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import ShopShow from './Components/ShopShow';
import React, { useEffect, useState } from 'react';
import Home from "./Components/ShopMain";

function App() {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (progress <= 100) {
            const id = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 10;
                    if (newProgress > 100) {
                        clearInterval(id);
                        navigate('/home');
                        return 100;
                    }
                    return newProgress;
                });
            }, 3000);

            return () => {
                clearInterval(id);
            };
        }
    }, [progress, navigate]);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ShopShow value={progress} />} />
                <Route path="/home/*" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
