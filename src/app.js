import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
import Gallery from './gallery';
import Nav from './nav';

export default function App() {
    return (
        <BrowserRouter>
            <>
                <Nav />
                <Route exact path='/' component={Home} />
                <Route path='/work' component={Gallery} />
            </>
        </BrowserRouter>
    );
}
