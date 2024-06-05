import React, { useEffect, useState } from 'react';
import './App.css';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 0 }}>Hello! I am Gotou.</p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 1 }}>I am studying something.</p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 2 }}>Some application.</p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 3 }}>Hey, make more money.</p>
        </div>
    );
}//毎回降りるようになってるけど、一回だけにするか   

export default About;

