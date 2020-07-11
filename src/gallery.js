import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default function Gallery() {
    const [space, setSpace] = useState(1);
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        setSpaces([1, 2, 3, 4, 5, 6]);
        console.log(space);
    }, [space]);

    const clickNext = () => {
        if (space === spaces.length) {
            setSpace(1);
        } else {
            setSpace(space + 1);
        }
    };

    const clickPrevious = () => {
        if (space === 1) {
            setSpace(spaces.length);
        } else {
            setSpace(space - 1);
        }
    };

    return (
        <div className='gallery'>
            <div className='gallery-nav'>
                <div onClick={clickPrevious} className='previous'></div>
                <div onClick={clickNext} className='next'></div>
            </div>
            {space == 1 && (
                <div className='space one'>
                    <div className='container'>
                        <img src='images/s1.jpg' />
                    </div>
                </div>
            )}
        </div>
    );
}
