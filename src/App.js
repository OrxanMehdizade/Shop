import './App.css';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import ShopShow from './Components/ShopShow';
import React, { useEffect, useState } from 'react';
import Home from "./Components/ShopMain";
// ... (imports)

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
                        // No immediate navigation here; it will be triggered by the callback
                    }
                    return newProgress;
                });
            }, 3000);

            return () => {
                clearInterval(id);
            };
        }
    }, [progress]);
    const handleProgressBarFilled = () => {
        // Navigate to the "/home" route when the progress bar is filled
        console.log("Navigating to /home");
        navigate('/home');
    };


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ShopShow value={progress} onProgressBarFilled={handleProgressBarFilled} />} />
                <Route path="/home/*" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
