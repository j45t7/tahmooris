import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
import Gallery from './gallery';

export default function App() {
    const [infoVisible, setInfoVisible] = useState();
    const [currentComponent, setCurrentComponent] = useState();
    let mouseDown = false;
    let info, infoLabel;

    useEffect(() => {
        if (location.pathname === '/') {
            setCurrentComponent('home');
        } else {
            setCurrentComponent('work');
        }
    }, []);

    const toggleInfo = e => {
        info = document.querySelector('.toggle');
        if (mouseDown || e.key === 'Enter' || e.type === 'touchend') {
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
            console.log('one', e.type);
        } else {
            infoLabel.classList.remove('on');
            infoLabel.classList.add('off');
            console.log('two', e.type);
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

    const handleMouseDown = e => {
        console.log('mouse down');
        mouseDown = true;
    };

    const handleMouseUp = e => {
        console.log('mouse up');
        mouseDown = false;
    };

    const handleInfoFocus = e => {
        console.log('focus');
        if (mouseDown) {
            toggleInfo();
        } else {
            toggleInfoLabel();
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

    const handleClick = e => {
        if (currentComponent == 'home') {
            setCurrentComponent('work');
        } else {
            setCurrentComponent('home');
        }
    };

    return (
        <BrowserRouter>
            <>
                <div className='nav'>
                    <div className='left-nav-touch'>
                        <div
                            className='info-label-touch'
                            onTouchEnd={toggleInfo}>
                            <p>INFO</p>
                        </div>
                    </div>
                    <div className='left-nav'>
                        <div
                            tabIndex='1'
                            onKeyDown={toggleInfo}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onFocus={handleInfoFocus}
                            onBlur={toggleInfoLabel}
                            // onClick={toggleInfo}
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
                                    <div className='gallery-label-touch'>
                                        <p className='label-touch'>WORK</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='right-nav'>
                                <div className='gallery-label-container'>
                                    <div className='gallery-label off'>
                                        <p>WORK</p>
                                    </div>
                                </div>
                                <Link
                                    tabIndex='-1'
                                    onMouseEnter={e => {
                                        handleGalleryMouse(e);
                                    }}
                                    onMouseLeave={e => {
                                        handleGalleryMouse(e);
                                    }}
                                    onClick={handleClick}
                                    to='/work/1'>
                                    <div
                                        tabIndex='2'
                                        className='gallery-link'
                                    />
                                </Link>
                            </div>
                        </>
                    )}
                    {currentComponent == 'work' && (
                        <>
                            <div className='right-nav-touch'>
                                <Link onClick={handleClick} to='/'>
                                    <div className='gallery-label-touch'>
                                        <p className='label-touch'>HOME</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='right-nav'>
                                <div className='gallery-label-container'>
                                    <div className='gallery-label off'>
                                        <p>HOME</p>
                                    </div>
                                </div>
                                <Link
                                    tabIndex='-1'
                                    onMouseEnter={e => {
                                        handleGalleryMouse(e);
                                    }}
                                    onMouseLeave={e => {
                                        handleGalleryMouse(e);
                                    }}
                                    onClick={handleClick}
                                    to='/'>
                                    <div
                                        tabIndex='2'
                                        className='gallery-link'
                                    />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <Route exact path='/' component={Home} />
                <Route path='/work/:space' component={Gallery} />
            </>
        </BrowserRouter>
    );
}
