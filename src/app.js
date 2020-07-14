import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
import Gallery from './gallery';

export default function App(props) {
    const [infoVisible, setInfoVisible] = useState(false);
    const [currentComponent, setCurrentComponent] = useState();

    useEffect(() => {
        if (location.pathname === '/') {
            setCurrentComponent('home');
        } else {
            setCurrentComponent('gallery');
        }
    }, []);

    const toggleInfo = () => {
        const info = document.querySelector('.toggle');
        if (!infoVisible) {
            info.classList.remove('closed');
            info.classList.add('open');
            setInfoVisible(true);
        } else {
            info.classList.remove('open');
            info.classList.add('closed');
            setInfoVisible(false);
        }
    };

    const handleClick = () => {
        if (currentComponent == 'home') {
            setCurrentComponent('gallery');
        } else {
            setCurrentComponent('home');
        }
    };

    return (
        <BrowserRouter>
            <>
                <div className='nav'>
                    <div onClick={toggleInfo} className='toggle closed'></div>
                    {infoVisible && (
                        <div className='info'>
                            <p>Tahmooris Ramazankhani</p>
                            <p>Berlin</p>
                            <p>tahmooris@gmail.com</p>
                            <p>Website by Tim Chandler</p>
                        </div>
                    )}
                    {currentComponent == 'home' && (
                        <Link onClick={handleClick} to='/work/1'>
                            <div className='gallery-link' />
                        </Link>
                    )}
                    {currentComponent == 'gallery' && (
                        <Link onClick={handleClick} to='/'>
                            <div className='gallery-link' />
                        </Link>
                    )}
                </div>
                <Route exact path='/' component={Home} />
                <Route path='/work/:space' component={Gallery} />
            </>
        </BrowserRouter>
    );
}
