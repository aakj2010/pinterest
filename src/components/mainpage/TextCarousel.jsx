import React, { useState, useEffect } from 'react';
import './carousel.css'
const TextCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [items]);

    return (
        <div className="carousel-container">
            <div className="carousel">
                {items.map((item, index) => (
                    <h2
                        key={index}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        style={{ color: item.Color }}
                    >
                        {item.text}
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default TextCarousel;
