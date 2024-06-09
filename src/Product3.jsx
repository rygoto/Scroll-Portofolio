import React, { useEffect, useState, useContext, createContext, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import { imageSources } from './Source';

const ImageContext = createContext(null);

const Gallery = ({ setHoveredImage, setHoverIndex }) => {
    const galleryRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = parseInt(entry.target.dataset.index, 10);
                if (entry.isIntersecting) {
                    setHoverIndex(index);
                    setHoveredImage(imageSources[index]);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: "-25% 0px -25% 0px" // 上下25%ずつをマージンとして設定
        });

        galleryRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            galleryRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div className='gallery-container'>
            {imageSources.map((image, index) => (
                <div key={index} style={{ marginBottom: '6px' }}>
                    <div
                        className='gallery-item-title'
                        onClick={() => window.open(image.url, '_blank')}
                    >
                        {image.alt}
                    </div>
                    <div
                        className='gallery-item'
                        data-index={index}
                        ref={(el) => (galleryRefs.current[index] = el)}
                        onClick={() => window.open(image.url, '_blank')}
                    >
                        {index === setHoverIndex ?
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

const Product3 = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [language, setLanguage] = useState('en');
    const [hoverIndex, setHoverIndex] = useState(null);

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
            duration: 500,
        }
    });

    const fontStyles = {
        en: {
            fontFamily: 'Kalam, cursive',
        },
        ja: {
            fontFamily: 'Hina Mincho, serif',
        },
        ch: {
            fontFamily: 'Ma Shan Zheng, cursive',
        },
        ko: {
            fontFamily: 'Nanum Myeongjo, serif',
        }
    };

    const getDescriptionByLanguage = () => {
        switch (language) {
            case 'en':
                return { text: hoveredImage.descriptionen, style: fontStyles.en };
            case 'ch':
                return { text: hoveredImage.descriptionch, style: fontStyles.ch };
            case 'ko':
                return { text: hoveredImage.descriptionko, style: fontStyles.ko };
            case 'ja':
                return { text: hoveredImage.descriptionja, style: fontStyles.ja };
            default:
                return { text: hoveredImage.descriptionen, style: fontStyles.en };
        }
    };

    return (
        <ImageContext.Provider value={setHoveredImage}>
            <div className='app'>
                <Gallery setHoveredImage={setHoveredImage} setHoverIndex={setHoverIndex} />
                {hoveredImage && (
                    <div className="description-box">
                        <div className='text-content'>
                            <div className="button-container">
                                <button className="language-button" onClick={() => setLanguage('en')}>en</button>
                                <button className="language-button" onClick={() => setLanguage('ch')}>中</button>
                                <button className="language-button" onClick={() => setLanguage('ko')}>한</button>
                                <button className="language-button" onClick={() => setLanguage('ja')}>日</button>
                            </div>
                            <animated.div style={{ ...descriptionSpring, ...getDescriptionByLanguage().style }}>
                                {getDescriptionByLanguage().text}
                            </animated.div>
                        </div>
                    </div>
                )}
            </div>
        </ImageContext.Provider>
    );
}

export default Product3;
