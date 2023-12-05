import React, { useEffect, useRef } from 'react';
import '../StyleCss/ShopShow.css';
import { motion, animate } from 'framer-motion';

function ShopShow({ value }) {
    const progressTextRef = useRef(null);

    useEffect(() => {
        const progressText = progressTextRef.current?.textContent;

        if (progressText != null) {
            const id = setInterval(() => {
                animate(parseInt(progressText), value, {
                    duration: 2,
                    onUpdate: (cv) => {
                        if (progressTextRef.current) {
                            progressTextRef.current.textContent = cv.toFixed(0);
                        }
                    }
                });
            }, 3000);

            return () => {
                clearInterval(id);
            };
        }
    }, [value]);

    return (
        <div className='ShopShowDivCss'>
            <div className='progressBar-Container'>
                <p className='word'>
                    <span className='active' id='spanSId'>S</span>
                    <span className='active' id='spanHId'>H</span>
                    <span className='active' id='spanOId'>O</span>
                    <span className='active' id='spanPId'>P</span>
                </p>
                <div className='progressBar'>
                    <motion.div
                        className='bar'
                        animate={{
                            width: `${value}%`
                        }}
                        transition={{
                            duration: 2
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ShopShow;
