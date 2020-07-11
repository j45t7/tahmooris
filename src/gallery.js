import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default function Gallery() {
    return (
        <div className='gallery'>
            <div className='gallery-nav'>
                <div className='previous'></div>
                <div className='next'></div>
            </div>
            <div className='first'>
                <h1>TAHMOORIS</h1>
            </div>
            <div className='last'>
                <h1>RAMAZANKHANI</h1>
            </div>
        </div>
    );
}
