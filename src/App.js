import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ShopShow from './Components/ShopShow';
import { useEffect, useState } from 'react';
import Good from './Components/ShopMain';

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
                        navigate('/Good');
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
                <Route path="/good/*" element={<Good />} />
            </Routes>
        </div>
    );
}

export default App;
