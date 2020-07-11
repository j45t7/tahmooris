import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
import Gallery from './gallery';

export default function App() {
    const [infoVisible, setInfoVisible] = useState(false);

    const toggleInfo = () => {
        setInfoVisible(!infoVisible);
    };

    return (
        <BrowserRouter>
            <>
                <div className='nav'>
                    <div onClick={toggleInfo} className='toggle'>
                        <img alt='Information' src='images/square.svg' />
                    </div>
                    {infoVisible && (
                        <div className='info'>
                            <p>
                                Tahmooris Ramazankhani is a photographer based
                                in Berlin
                            </p>
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
