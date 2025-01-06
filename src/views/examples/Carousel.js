import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Archivo CSS para el estilo

const DeckCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Cambiar imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="deck-carousel">
      <button className="deck-carousel-button prev" onClick={handlePrev}>
        &#9664;
      </button>
      <div className="deck-carousel-images">
        {images.map((image, index) => {
          // Determina la clase de cada imagen según su posición
          let position = "next";
          if (index === currentIndex) {
            position = "current";
          } else if (index === (currentIndex - 1 + images.length) % images.length) {
            position = "prev";
          }

          return (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`deck-carousel-image ${position}`}
            />
          );
        })}
      </div>
      <button className="deck-carousel-button next" onClick={handleNext}>
        &#9654;
      </button>
    </div>
  );
};

export default DeckCarousel;
