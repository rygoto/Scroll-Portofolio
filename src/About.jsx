import React, { useEffect, useState } from 'react';
import './App.css';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <div className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 0 }}>
                <p >Thank you for watching my website.</p>
                <p >I'm Hiyokoya.</p>
            </div>
            <div className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 1 }}>
                <p >I'm interested in developing</p>
                <p >an interacting UI with 3D space. </p>
            </div>
            <div className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 2 }}>
                <p >For now, I'm a university student in Japan,</p>
                <p >and looking for a job. </p>
            </div>
            <div className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 3 }}>
                <p >Here are my products.</p>
                <p >Please have a look around!</p>
            </div>
            <div className={isVisible ? 'fadeIn' : ''} style={{ '--animation-order': 4 }}>
                <p >If you are interested,</p>
                <p >feel free to contact me.</p>
            </div>
        </div>
    );
}//毎回降りるようになってるけど、一回だけにするか   
// 一回だけにする場合は、useEffectの第二引数に空の配列を渡す
//Hello! I am Hiyokoya./I am studying something./There are some applications./Hey, make more money.

export default About;

