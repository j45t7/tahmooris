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
                <div className='space'>
                    <div className='c-v8'>
                        <img src='images/v8.jpg' />
                    </div>
                    <div className='c-v14'>
                        <img src='images/s12.jpg' />
                    </div>
                </div>
            )}
            {space == 2 && (
                <div className='space'>
                    <div className='left-2'>
                        <div className='c-n4'>
                            <img src='images/n4.jpg' />
                        </div>
                        <div className='c-s7'>
                            <img src='images/s7.jpg' />
                        </div>
                    </div>
                    <div className='c-s4'>
                        <img src='images/s4.jpg' />
                    </div>
                </div>
            )}
            {space == 3 && (
                <div className='space'>
                    <div className='c-s5'>
                        <img src='images/s5.jpg' />
                    </div>
                </div>
            )}
            {space == 4 && (
                <div className='space'>
                    <div className='c-s2'>
                        <img src='images/s2.jpg' />
                    </div>
                </div>
            )}
            {space == 5 && (
                <div className='space'>
                    <div className='c-s2'>
                        <img src='images/s2.jpg' />
                    </div>
                    <div className='c-s3'>
                        <img src='images/s3.jpg' />
                    </div>
                    <div className='c-s9'>
                        <img src='images/s9.jpg' />
                    </div>
                    <div className='c-v3'>
                        <img src='images/v3.jpg' />
                    </div>
                    <div className='c-n3'>
                        <img src='images/n3.jpg' />
                    </div>
                </div>
            )}
        </div>
    );
}
