import React, { useEffect, useState, useContext, createContext } from 'react';
import { useSpring, animated } from 'react-spring';
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
        descriptionko: 'Map Compass는 지도 검색을 위해 XR 기능을 사용하여 React와 Babylonjs로 만든 간단한 앱입니다.',
        url: 'https://map-compass.vercel.app/'
    },
    {
        src: '2.png',
        video: '2.mp4',
        alt: 'Earth-based Youtubesearch',
        descriptionen: 'Earth-based Youtubesearch is a music player app that allows users to search for songs and play them. The app is built using React.js and Tailwind CSS.',
        descriptionja: 'Earth-based Youtubesearchは、ユーザーが曲を検索して再生できる音楽プレーヤーアプリです。このアプリは、React.jsとTailwind CSSを使用して構築されています。',
        descriptionch: 'Earth-based Youtubesearch是一个音乐播放器应用程序，允许用户搜索歌曲并播放它们。该应用程序使用React.js和Tailwind CSS构建。',
        descriptionko: 'Earth-based Youtubesearch는 사용자가 노래를 검색하고 재생할 수 있는 음악 플레이어 앱입니다. 이 앱은 React.js와 Tailwind CSS를 사용하여 제작되었습니다.',
        url: 'https://earthbased-youtubesearch.vercel.app/'
    },
    {
        src: '3.png',
        video: '3.mp4',
        alt: 'Sphere-City-Search',
        descriptionen: 'sphere-City-Search is a simple app made by React and Babylonjs, using XR function to city search.',
        descriptionja: 'sphere-City-Searchはこれこれこういうアプリです',
        descriptionch: 'sphere-City-Search是一个简单的应用程序，允许用户搜索YouTube视频并播放它们。该应用程序使用React.js和Tailwind CSS构建。',
        descriptionko: 'sphere-City-Search는 지도 검색을 위해 XR 기능을 사용하여 React와 Babylonjs로 만든 간단한 앱입니다.',
        url: 'https://citysearch-proto.vercel.app/'
    }
];

const Gallery = () => {
    const setImageData = useContext(ImageContext);
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newHoverIndex = null;
            if (scrollPosition < 600) {
                newHoverIndex = 0;
            } else if (scrollPosition >= 600 && scrollPosition < 1100) {
                newHoverIndex = 1;
            } else if (scrollPosition >= 1100) {
                newHoverIndex = 2;
            }
            if (newHoverIndex !== hoverIndex) {
                setHoverIndex(newHoverIndex);
                //setHoveredImage(imageSources[newHoverIndex]);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='gallery-container'>
            {imageSources.map((image, index) => (
                <div style={{ marginBottom: '6px' }}> {/* 新しくdivを追加し、各アイテムごとに余白を設定 */}
                    <div
                        style={{ textAlign: 'center', padding: '30px', fontWeight: 'bold', color: 'white', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={() => window.open(image.url, '_blank')}
                    >{image.alt}</div> {/* 見出しをgallery-itemの外に配置 */}
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
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newHoverIndex = null;
            if (scrollPosition < 500) {
                newHoverIndex = 0;
            } else if (scrollPosition >= 500 && scrollPosition < 1100) {
                newHoverIndex = 1;
            } else if (scrollPosition >= 1100) {
                newHoverIndex = 2;
            }
            if (newHoverIndex !== hoverIndex) {
                setHoverIndex(newHoverIndex);
                setHoveredImage(imageSources[newHoverIndex]);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const scrollPosition = window.scrollY;
        console.log(`scrollPosition: ${scrollPosition}`);
    }
    );

    const descriptionSpring = useSpring({
        to: {
            opacity: 1,
            transform: 'rotateY(0deg)'
        },
        from: {
            opacity: 0,
            transform: 'rotateY(180deg)'
        },
        reset: true,
        config: {
            duration: 500,// アニメーションの持続時間をミリ秒で指定
            tension: 170,  // 張力
            friction: 26, // 摩擦
        }
    });

    const getDescriptionByLanguage = () => {
        switch (language) {
            case 'en':
                return hoveredImage.descriptionen;
            case 'ja':
                return hoveredImage.descriptionja;
            case 'ch':
                return hoveredImage.descriptionch;
            case 'ko':
                return hoveredImage.descriptionko;
            default:
                return hoveredImage.descriptionen;
        }
    };

    /*useEffect(() => {
        if (hoveredImage) {
            console.log(`Hovered Image alt: ${hoveredImage.alt}, description (chinese): ${hoveredImage.descriptionch}`);
        }
    }, [hoveredImage]);*/

    return (
        <ImageContext.Provider value={setHoveredImage}>
            <div className='app'>
                <h1>Gallery</h1>
                <Gallery />
                {hoveredImage && (
                    <div className="description-box">
                        <div className='text-content'>
                            <div className="button-container">
                                <button className="language-button" onClick={() => setLanguage('en')}>en</button>
                                <button className="language-button" onClick={() => setLanguage('ja')}>日</button>
                                <button className="language-button" onClick={() => setLanguage('ch')}>中</button>
                                <button className="language-button" onClick={() => setLanguage('ko')}>한</button>
                            </div>
                            <animated.div style={descriptionSpring}>{getDescriptionByLanguage()}</animated.div>
                        </div>
                    </div>
                )}
            </div>
        </ImageContext.Provider>
    );
}

export default App2;


