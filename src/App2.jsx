import React, { useEffect, useState, useContext, createContext } from 'react';
import './App.css';

const ImageContext = createContext(null);

const imageSources = [
    {
        src: '1.png',
        video: '1.mp4',
        alt: 'Map Compass',
        descriptionen: 'Map Compass is a simple app made by React and Babylonjs, using XR function to map search.',
        descriptionja: 'Map Compssはこれこれこういうアプリです',
        descriptionch: 'MapCompass是一个简单的应用程序，允许用户搜索YouTube视频并播放它们。该应用程序使用React.js和Tailwind CSS构建。',
        url: 'https://map-compass.vercel.app/'
    },
    {
        src: '2.png',
        video: '2.mp4',
        alt: 'Earth-based Youtubesearch',
        descriptionen: 'Earth-based Youtubesearch is a music player app that allows users to search for songs and play them. The app is built using React.js and Tailwind CSS.',
        descriptionja: 'Earth-based Youtubesearchは、ユーザーが曲を検索して再生できる音楽プレーヤーアプリです。このアプリは、React.jsとTailwind CSSを使用して構築されています。',
        descriptionch: 'Earth-based Youtubesearch是一个音乐播放器应用程序，允许用户搜索歌曲并播放它们。该应用程序使用React.js和Tailwind CSS构建。',
        url: 'https://earthbased-youtubesearch.vercel.app/'
    },
    {
        src: '3.png',
        video: '3.mp4',
        alt: 'Sphere-City-Search',
        descriptionen: 'sphere-City-Search is a simple app made by React and Babylonjs, using XR function to city search.',
        descriptionja: 'sphere-City-Searchはこれこれこういうアプリです',
        descriptionch: 'sphere-City-Search是一个简单的应用程序，允许用户搜索YouTube视频并播放它们。该应用程序使用React.js和Tailwind CSS构建。',
        url: 'https://citysearch-proto.vercel.app/'
    }
];

const Gallery = () => {
    const setImageData = useContext(ImageContext);
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className='gallery-container'>
            {imageSources.map((image, index) => (
                <div style={{ marginBottom: '6px' }}> {/* 新しくdivを追加し、各アイテムごとに余白を設定 */}
                    <div style={{ textAlign: 'center', padding: '5px', fontWeight: 'bold', color: 'white', textDecoration: 'underline' }}>{image.alt}</div> {/* 見出しをgallery-itemの外に配置 */}
                    <div className='gallery-item'
                        key={index} onMouseEnter={() => {
                            setImageData(image);
                            setHoverIndex(index);
                        }}
                        //onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => window.open(image.url, '_blank')}
                    > {/* gallery-item自体はそのまま */} {hoverIndex === index ?
                        <video autoPlay loop muted src={image.video} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        :
                        <img src={image.src} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

function App2() {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [language, setLanguage] = useState('en');

    const getDescriptionByLanguage = () => {
        switch (language) {
            case 'en':
                return hoveredImage.descriptionen;
            case 'ja':
                return hoveredImage.descriptionja;
            case 'ch':
                return hoveredImage.descriptionch;
            default:
                return hoveredImage.descriptionen;
        }
    };

    useEffect(() => {
        if (hoveredImage) {
            console.log(`Hovered Image alt: ${hoveredImage.alt}, description (chinese): ${hoveredImage.descriptionch}`);
        }
    }, [hoveredImage]);

    return (
        <ImageContext.Provider value={setHoveredImage}>
            <div className='app'>
                <h1>Gallery</h1>
                <Gallery />
                {hoveredImage && (
                    <div className="description-box">
                        <div>{getDescriptionByLanguage()}</div>
                        <div style={{ marginTop: '10px' }}>
                            <button onClick={() => setLanguage('en')}>English</button>
                            <button onClick={() => setLanguage('ja')}>日本語</button>
                            <button onClick={() => setLanguage('ch')}>中文</button>
                        </div>
                    </div>
                )}
            </div>
        </ImageContext.Provider>
    );
}

export default App2;


