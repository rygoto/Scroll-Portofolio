import React, { useState } from 'react';
import './App.css';

// Dummy image list (replace with your actual images)
const images = [
  {
    src: '1.png',
    alt: 'Earthbased-Youtubesearch',
    description: 'Earthbased-Youtubesearch is a simple app that allows users to search for YouTube videos. The app is built using React.js and Tailwind CSS.',
    url: 'https://earthbased-youtubesearch.vercel.app/'
  },
  {
    src: '2.png',
    alt: 'Music Ball',
    description: 'Music Ball is a music player app that allows users to search for songs and play them. The app is built using React.js and Tailwind CSS.',
    url: 'https://music-ball.vercel.app/'
  },
  {
    src: '3.png',
    alt: 'Map Compass',
    description: 'Map Compass is a simple app that shows the user\'s current location on a map. The app is built using React.js and Tailwind CSS.',
    url: 'https://map-compass.vercel.app/'
  },
  {
    src: '4.png',
    alt: 'Ground Corps',
    description: 'Ground Corps is a platform for connecting volunteers with organizations that need help. The app is built using React.js and Tailwind CSS.',
    url: 'https://ground-corps.vercel.app/'
  },
  {
    src: '5.png',
    alt: 'City Search',
    description: 'City Search can be used to search for cities around the world. It uses the OpenWeatherMap API to fetch the weather data for the searched city. The app is built using React.js and Tailwind CSS.',
    url: 'https://citysearch-proto.vercel.app/'
  }
];

// Gallery Component
function Gallery({ items, imageWidth, imageHeight, imageSize, horizontalGap, verticalGap }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${imageSize}px, 1fr))`,
    gridColumnGap: `${horizontalGap}px`,
    gridRowGap: `${verticalGap}px`,
  };


  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={galleryStyle}>
      {items.map((item, index) => (
        <div
          key={index}
          className="gallery-item"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(item.url)}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="gallery-image"
            style={{ width: imageWidth, height: imageHeight }}
          />
          {hoveredIndex === index && (
            <div className="hover-info">
              <h3>{item.alt}</h3>
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Portfolio Gallery</h1>
      <Gallery items={images} imageWidth={250} imageHeight={300} horizontalGap={10} verticalGap={50} />
    </div>
  );
}

export default App;
