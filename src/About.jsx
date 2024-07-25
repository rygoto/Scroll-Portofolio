import React, { useEffect, useState } from 'react';
import './App.css';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 0 }}>Thank you for watching my website.</p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 1 }}>I'm Hiyokoya.</p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 2 }}>I'm interested in developing </p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 3 }}>an interacting UI with 3D space. </p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 4 }}>For now, I'm a university student in Japan,</p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 5 }}>and looking for a job.</p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 6 }}>Here are my products.</p>
            <p className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 7 }}>Please have a look around!</p>
        </div>
    );
}//毎回降りるようになってるけど、一回だけにするか   
// 一回だけにする場合は、useEffectの第二引数に空の配列を渡す
//Hello! I am Hiyokoya./I am studying something./There are some applications./Hey, make more money.

export default About;

