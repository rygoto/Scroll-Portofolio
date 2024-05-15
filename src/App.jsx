import React, { useState } from 'react';
import './App.css';

// Dummy image list (replace with your actual images)
const images = [
  {
    src: '1.png',
    video: '1.mp4',
    alt: 'Map Compass',
    description: 'Earthbased-Youtubesearch is a simple app that allows users to search for YouTube videos. The app is built using React.js and Tailwind CSS.',
    url: 'https://map-compass.vercel.app/'
  },
  {
    src: '2.png',
    video: '2.mp4',
    alt: 'Earth-based Youtubesearch',
    description: 'Music Ball is a music player app that allows users to search for songs and play them. The app is built using React.js and Tailwind CSS.',
    url: 'https://earthbased-youtubesearch.vercel.app/'
  },
  {
    src: '3.png',
    video: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    alt: 'Map Compass',
    description: 'Map Compass is a simple app that shows the user\'s current location on a map. The app is built using React.js and Tailwind CSS.',
    url: 'https://map-compass.vercel.app/'
  },
  {
    src: '4.png',
    video: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    alt: 'Ground Corps',
    description: 'Ground Corps is a platform for connecting volunteers with organizations that need help. The app is built using React.js and Tailwind CSS.',
    url: 'https://ground-corps.vercel.app/'
  },
  {
    src: '5.png',
    video: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
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
    <>
      <div >
        {items.map((item, index) => (
          <div
            style={galleryStyle}
            key={index}
            className="gallery-item2"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(item.url)}

          //style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row-reverse' }}
          >
            <div className="media-container2">
              {hoveredIndex === index ? (
                <video
                  src={item.video}
                  width={imageWidth}
                  height={imageHeight}
                  autoPlay
                  loop
                  muted
                />) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="gallery-image2"
                  style={{ width: imageWidth, height: imageHeight }}
                />)}
            </div>
            <span style={{
              position: 'absolute',
              top: '10px', // Adjust as needed
              left: '10px', // Adjust as needed
              color: 'white', // Adjust color for visibility
              textShadow: '0px 0px 8px rgba(0,0,0,0.7)', // Shadow for readability
              textDecoration: 'underline'
            }}>
              {item.alt}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Portfolio Gallery</h1>
      <Gallery items={images} imageWidth={250} imageHeight={300} horizontalGap={40} verticalGap={50} />
    </div>
  );
}

export default App;
