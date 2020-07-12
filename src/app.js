import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
import Gallery from './gallery';

export default function App() {
    const [infoVisible, setInfoVisible] = useState(false);

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

    return (
        <BrowserRouter>
            <>
                <div className='nav'>
                    <div onClick={toggleInfo} className='toggle closed'></div>
                    {infoVisible && (
                        <div className='info'>
                            <p>Tahmooris Ramazankhani</p>
                            <p>is a photographer based in Berlin</p>
                            <p>Email: tahmooris@gmail.com</p>
                            <p>Website by Tim Chandler</p>
                        </div>
                    )}
                </div>
                <Route exact path='/' component={Home} />
                <Route path='/work' component={Gallery} />
            </>
        </BrowserRouter>
    );
}
