
import '../StyleCss/ShopShow.css'
import axios from 'axios';
import 'animate.css';
import {useState,useEffect} from "react";

import { useSpring, animated } from 'react-spring';

//animate__bounceInDown
function ShopShow(){
    const [isDownloading, setDownloading] = useState(false);

    // useSpring hook'u ile animasyonu tanımlayın
    const downloadAnimation = useSpring({
        opacity: isDownloading ? 1 : 0,
        transform: isDownloading ? 'scale(1)' : 'scale(0.8)',
    });

    const handleDownload = () => {
        // İndirme başladığında durumu güncelle
        setDownloading(true);

        // İndirme süresini taklit etmek için bir süre bekleyin (örneğin, 2 saniye)
        setTimeout(() => {
            // İndirme tamamlandığında durumu güncelle
            setDownloading(false);
        }, 2000);
    };

    return(

        <div className='ShopShowDivCss'>

            <p className="animate__animated animate__bounceInDown animate__delay-10s">
                <span id='spanSId'>S</span>
                <span id='spanHId'>H</span>
                <span id='spanOId'>O</span>
                <span id='spanPId'>P</span>
            </p>
            <div>
                <button onClick={handleDownload}>Dosyayı İndir</button>

                <animated.div style={downloadAnimation}>
                    {isDownloading && <p>İndiriliyor...</p>}
                </animated.div>
            </div>
        </div>
    )
}

export default ShopShow