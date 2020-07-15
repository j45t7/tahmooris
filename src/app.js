import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
import Gallery from './gallery';

export default function App() {
    const [infoVisible, setInfoVisible] = useState();
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

    const handleGalleryMouse = e => {
        const workLabel = document.querySelector('.gallery-label');
        if (e.type === 'mouseenter') {
            workLabel.classList.remove('off');
            workLabel.classList.add('on');
        }
        if (e.type === 'mouseleave') {
            workLabel.classList.remove('on');
            workLabel.classList.add('off');
        }
    };

    const handleInfoMouse = e => {
        const infoLabel = document.querySelector('.info-label');
        if (e.type === 'mouseenter') {
            infoLabel.classList.remove('off');
            infoLabel.classList.add('on');
        }
        if (e.type === 'mouseleave') {
            infoLabel.classList.remove('on');
            infoLabel.classList.add('off');
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
                    <div className='left-nav'>
                        <div
                            onClick={toggleInfo}
                            onMouseEnter={e => {
                                handleInfoMouse(e);
                            }}
                            onMouseLeave={e => {
                                handleInfoMouse(e);
                            }}
                            className='toggle closed'></div>
                        <div className='info-label-container'>
                            <div className='info-label off'>
                                <p>INFORMATION</p>
                            </div>
                        </div>
                    </div>
                    {infoVisible && (
                        <div className='info'>
                            <p>Tahmooris Ramazankhani</p>
                            <p>Berlin</p>
                            <p>tahmooris@gmail.com</p>
                            <p>Website by Tim Chandler</p>
                        </div>
                    )}
                    {currentComponent == 'home' && (
                        <div className='right-nav'>
                            <div className='gallery-label-container'>
                                <div className='gallery-label off'>
                                    <p>WORK</p>
                                </div>
                            </div>
                            <Link
                                onMouseEnter={e => {
                                    handleGalleryMouse(e);
                                }}
                                onMouseLeave={e => {
                                    handleGalleryMouse(e);
                                }}
                                onClick={handleClick}
                                to='/work/1'>
                                <div className='gallery-link' />
                            </Link>
                        </div>
                    )}
                    {currentComponent == 'gallery' && (
                        <div className='right-nav'>
                            <div className='gallery-label-container'>
                                <div className='gallery-label off'>
                                    <p>HOME</p>
                                </div>
                            </div>
                            <Link
                                onMouseEnter={e => {
                                    handleGalleryMouse(e);
                                }}
                                onMouseLeave={e => {
                                    handleGalleryMouse(e);
                                }}
                                onClick={handleClick}
                                to='/'>
                                <div className='gallery-link' />
                            </Link>
                        </div>
                    )}
                </div>
                <Route exact path='/' component={Home} />
                <Route path='/work/:space' component={Gallery} />
            </>
        </BrowserRouter>
    );
}
