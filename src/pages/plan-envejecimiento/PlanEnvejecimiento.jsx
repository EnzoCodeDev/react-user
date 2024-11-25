import React, { useState } from 'react';
import './planEnvejecimiento.css';

export const PlanEnvejecimiento = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Estado para rastrear la diapositiva actual
    const slides = [
        { id: 1, src: 'imagen1.png', alt: 'Página 1' },
        { id: 2, src: 'imagen2.png', alt: 'Página 2' },
        { id: 3, src: 'imagen3.png', alt: 'Página 3' },
    ];

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <div>
            <div className="presentation">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="slide"
                        style={{
                            transform: `translateX(${(index - currentSlide) * 100}%)`,
                        }}
                    >
                        <img src={slide.src} alt={slide.alt} />
                    </div>
                ))}
            </div>
            <div className="controls">
                <button onClick={goToPreviousSlide}>Anterior</button>
                <button onClick={goToNextSlide}>Siguiente</button>
            </div>
        </div>
    );
};
