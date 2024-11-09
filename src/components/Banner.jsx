import React, { useState, useEffect } from 'react';
import './Banner.css';

// Imágenes de ejemplo 
const images = [
  'https://cdn.pixabay.com/photo/2023/05/17/13/38/lofoten-islands-8000196_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/04/09/22/28/trees-8686902_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/09/02/15/06/sunset-9017041_1280.jpg'
];

// Títulos de ejemplo
const titles = [
  'Descubre las Islas del Mundo',
  'Explora los Bosques del Mundo',
  'Contempla el Atardecer Perfecto'
];

// Secciones de la página
const sections = [
  '#section1',
  '#section2',
  '#section3'
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

// Para cambiar las imágenes:
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // cambian cada 4 segundos

    return () => clearInterval(interval); // limpia el intervalo 
  }, []);
// Al hacer click en los botones redondos, cambia el índice al seleccionado:
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
// Al hacer click en la imágen lleva a su correspondiente sección:
  const handleBannerClick = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="banner-container">
      <div
        className="banner-image"
        style={{
          backgroundImage: `url(${images[currentIndex]})`
        }}
        onClick={() => handleBannerClick(sections[currentIndex])} 
      >
        {/* Sección del título */}
        <div className="banner-title">
          <h2>{titles[currentIndex]}</h2>
        </div>
      </div>
      {/* Contenedor para los botones del banner */}
      <div className="banner-buttons">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`button ${currentIndex === index ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;