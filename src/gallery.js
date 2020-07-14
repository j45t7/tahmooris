import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Gallery(props) {
    const [space, setSpace] = useState();
    const [spaces, setSpaces] = useState([]);
    const [nextSpace, setNextSpace] = useState();
    const [previousSpace, setPreviousSpace] = useState();

    useEffect(() => {
        setSpaces([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
        setSpace(parseInt(props.match.params.space));
    }, []);

    useEffect(() => {
        if (space === spaces.length) {
            setNextSpace(1);
        } else {
            setNextSpace(space + 1);
        }
        if (space === 1) {
            setPreviousSpace(spaces.length);
        } else {
            setPreviousSpace(space - 1);
        }
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
                <Link
                    onClick={clickPrevious}
                    className='previous'
                    to={`/work/${previousSpace}`}>
                    <div className='previous'></div>
                </Link>
                <Link
                    onClick={clickNext}
                    className='next'
                    to={`/work/${nextSpace}`}>
                    <div className='next'></div>
                </Link>
            </div>
            {space === 1 && (
                <div className='space one'>
                    <div className='c-l2'>
                        <img src='/images/l2.jpg' />
                    </div>
                    <div className='c-f2'>
                        <img src='/images/f2.jpg' />
                    </div>
                </div>
            )}
            {space === 2 && (
                <div className='space two'>
                    <div className='c-v8'>
                        <img src='/images/v8.jpg' />
                    </div>
                    <div className='c-s14'>
                        <img src='/images/s14.jpg' />
                    </div>
                </div>
            )}
            {space === 3 && (
                <div className='space three'>
                    <div className='c-s6'>
                        <img src='/images/s6.jpg' />
                    </div>
                </div>
            )}
            {space === 4 && (
                <div className='space four'>
                    <div className='c-v6'>
                        <img src='/images/v4.jpg' />
                    </div>
                    <div className='c-s2'>
                        <img src='/images/s2.jpg' />
                    </div>
                </div>
            )}
            {space === 5 && (
                <div className='space five'>
                    <div className='c-s4'>
                        <img src='/images/s4.jpg' />
                    </div>
                    <div className='c-s7'>
                        <img src='/images/s7.jpg' />
                    </div>
                    <div className='c-n4'>
                        <img src='/images/n4.jpg' />
                    </div>
                </div>
            )}
            {space === 6 && (
                <div className='space six'>
                    <div className='c-t2'>
                        <img src='/images/t2.jpg' />
                    </div>
                </div>
            )}
            {space === 7 && (
                <div className='space seven'>
                    <div className='c-t3'>
                        <img src='/images/t3.jpg' />
                    </div>
                </div>
            )}
            {space === 8 && (
                <div className='space eight'>
                    <div className='c-t4'>
                        <img src='/images/t4.jpg' />
                    </div>
                </div>
            )}
            {space === 9 && (
                <div className='space nine'>
                    <div className='c-t11'>
                        <img src='/images/t11.jpg' />
                    </div>
                </div>
            )}
            {space === 10 && (
                <div className='space ten'>
                    <div className='c-t10'>
                        <img src='/images/t10.jpg' />
                    </div>
                    <div className='c-t5'>
                        <img src='/images/t5.jpg' />
                    </div>
                </div>
            )}
            {space === 11 && (
                <div className='space eleven'>
                    <div className='c-n2'>
                        <img src='/images/n2.jpg' />
                    </div>
                    <div className='c-n3'>
                        <img src='/images/n3.jpg' />
                    </div>
                </div>
            )}
            {space === 12 && (
                <div className='space twelve'>
                    <div className='c-t6'>
                        <img src='/images/t6.jpg' />
                    </div>
                </div>
            )}
            {space === 13 && (
                <div className='space thirteen'>
                    <div className='c-t1'>
                        <img src='/images/t1.jpg' />
                    </div>
                </div>
            )}
            {space === 14 && (
                <div className='space fourteen'>
                    <div className='c-t9'>
                        <img src='/images/t9.jpg' />
                    </div>
                </div>
            )}
        </div>
    );
}
