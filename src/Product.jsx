import React, { useEffect, useState, useContext, createContext } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import { imageSources } from './Source';

const ImageContext = createContext(null);

const Gallery = () => {
    const setImageData = useContext(ImageContext);
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {//ここのロジックはintersectの監視に変える
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newHoverIndex = null;
            if (scrollPosition < 200) {
                newHoverIndex = 0;
            } else if (scrollPosition >= 200 && scrollPosition < 400) {
                newHoverIndex = 1;
            } else if (scrollPosition >= 400) {
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
            {/*<p>やっほーぷくはち</p>*/}
            {imageSources.map((image, index) => (
                <div style={{ marginBottom: '6px' }}> {/* 新しくdivを追加し、各アイテムごとに余白を設定 */}
                    <div
                        className='gallery-item-title'
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

function Product() {
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
            } else if (scrollPosition >= 1100 && scrollPosition < 1700) {
                newHoverIndex = 2;
            } else if (scrollPosition >= 1700 && scrollPosition < 2300) {
                newHoverIndex = 3;
            } else if (scrollPosition >= 2300) {
                newHoverIndex = 4;
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
            //tension: 170,  // 張力
            //friction: 26, // 摩擦
        }
    });

    const fontStyles = { //https://fonts.google.com/?noto.script=Hansここでfont探せる
        en: {
            fontFamily: 'Kalam, cursive',
            // fontFamily: 'Sedan SC, serif',
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

    /*useEffect(() => {
        if (hoveredImage) {
            console.log(`Hovered Image alt: ${hoveredImage.alt}, description (chinese): ${hoveredImage.descriptionch}`);
        }
    }, [hoveredImage]);*/

    return (
        <ImageContext.Provider value={setHoveredImage}>
            <div className='app'>
                {/*<h1>Portofolio</h1>*/}
                <Gallery />
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

export default Product;


