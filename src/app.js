import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
import Gallery from './gallery';

export default function App() {
    const [infoVisible, setInfoVisible] = useState();
    const [currentComponent, setCurrentComponent] = useState();
    let info, infoLabel, link;

    useEffect(() => {
        if (location.pathname === '/') {
            setCurrentComponent('home');
        } else {
            setCurrentComponent('work');
        }
    }, []);

    const toggleInfo = e => {
        info = document.querySelector('.toggle');
        if (e.type === 'click' || e.key === 'Enter' || e.type === 'touchend') {
            if (!infoVisible) {
                info.classList.remove('closed');
                info.classList.add('open');
                setInfoVisible(true);
            } else {
                info.classList.remove('open');
                info.classList.add('closed');
                setInfoVisible(false);
            }
        }
    };

    const toggleInfoLabel = e => {
        infoLabel = document.querySelector('.info-label');
        info = document.querySelector('.toggle');
        if (e.type === 'blur') {
            return;
        }
        if (infoLabel.classList.contains('off')) {
            infoLabel.classList.remove('off');
            infoLabel.classList.add('on');
        } else {
            infoLabel.classList.remove('on');
            infoLabel.classList.add('off');
        }
        if (e.type === 'mousedown') {
            if (document.activeElement.classList.contains('toggle')) {
                info.blur();
                toggleInfo();
            }
        }
        if (e.type === 'mouseleave') {
            if (document.activeElement.classList.contains('toggle')) {
                info.blur();
            }
        }
    };

    const toggleGalleryLabel = e => {
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

    const handleClick = e => {
        info = document.querySelector('.toggle');
        if (infoVisible) {
            info.classList.remove('open');
            info.classList.add('closed');
            setInfoVisible(false);
        }
        if (currentComponent == 'home') {
            setCurrentComponent('work');
        } else {
            setCurrentComponent('home');
        }
    };

    const handleGalleryFocus = e => {
        if (e.type == 'click') {
            return;
        } else {
            link = document.querySelector('.gallery-link');
            link.classList.add('focused');
        }
    };

    const handleGalleryBlur = e => {
        if (e.type == 'click') {
            return;
        } else {
            link = document.querySelector('.gallery-link');
            link.classList.remove('focused');
        }
    };

    return (
        <BrowserRouter>
            <>
                <div className='left-nav-touch' onTouchEnd={toggleInfo}>
                    <p>INFO</p>
                </div>
                <div className='left-nav'>
                    <div
                        tabIndex='1'
                        onKeyDown={toggleInfo}
                        onClick={toggleInfo}
                        onMouseEnter={toggleInfoLabel}
                        onMouseLeave={toggleInfoLabel}
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
                        <p>Photographer</p>
                        <p>Berlin</p>
                        <p>tahmooris@gmail.com</p>
                        <p>Website by Tim Chandler</p>
                    </div>
                )}
                {currentComponent == 'home' && (
                    <>
                        <div className='right-nav-touch'>
                            <Link onClick={handleClick} to='/work/1'>
                                <p className='label-touch'>WORK</p>
                            </Link>
                        </div>
                        <div className='right-nav'>
                            <div className='gallery-label-container'>
                                <div className='gallery-label off'>
                                    <p>WORK</p>
                                </div>
                            </div>
                            <Link
                                className='right-link'
                                tabIndex='2'
                                onMouseEnter={toggleGalleryLabel}
                                onMouseLeave={toggleGalleryLabel}
                                onClick={handleClick}
                                onFocus={handleGalleryFocus}
                                onBlur={handleGalleryBlur}
                                to='/work/1'>
                                <div className='gallery-link' />
                            </Link>
                        </div>
                    </>
                )}
                {currentComponent == 'work' && (
                    <>
                        <div className='right-nav-touch'>
                            <Link onClick={handleClick} to='/'>
                                <p className='label-touch'>HOME</p>
                            </Link>
                        </div>
                        <div className='right-nav'>
                            <div className='gallery-label-container'>
                                <div className='gallery-label off'>
                                    <p>HOME</p>
                                </div>
                            </div>
                            <Link
                                className='right-link'
                                tabIndex='2'
                                onMouseEnter={toggleGalleryLabel}
                                onMouseLeave={toggleGalleryLabel}
                                onClick={handleClick}
                                onFocus={handleGalleryFocus}
                                onBlur={handleGalleryBlur}
                                to='/'>
                                <div className='gallery-link'></div>
                            </Link>
                        </div>
                    </>
                )}
                <Route exact path='/' component={Home} />
                <Route path='/work/:space' component={Gallery} />
            </>
        </BrowserRouter>
    );
}
