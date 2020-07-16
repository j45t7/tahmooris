import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { files as image } from './files';

export default function Gallery(props) {
    const [space, setSpace] = useState();
    const [spaces, setSpaces] = useState([]);
    const [nextSpace, setNextSpace] = useState();
    const [previousSpace, setPreviousSpace] = useState();
    const history = useHistory();

    useEffect(() => {
        setSpaces([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
        setSpace(parseInt(props.match.params.space));
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', keyNav);
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
        return () => {
            document.removeEventListener('keydown', keyNav);
        };
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

    const keyNav = e => {
        if (e.key === 'ArrowLeft' || e.key === 'Left') {
            if (space === 1) {
                history.push(`/work/${spaces.length}`);
                setSpace(spaces.length);
            } else {
                history.push(`/work/${space - 1}`);
                setSpace(space - 1);
            }
        }
        if (e.key === 'ArrowRight' || e.key === 'Right') {
            if (space === spaces.length) {
                history.push(`/work/1`);
                setSpace(1);
            } else {
                history.push(`/work/${space + 1}`);
                setSpace(space + 1);
            }
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
                        <img src={image.l2} />
                    </div>
                    <div className='c-f2'>
                        <img src={image.f2} />
                    </div>
                </div>
            )}
            {space === 2 && (
                <div className='space two'>
                    <div className='c-v8'>
                        <img src={image.v8} />
                    </div>
                    <div className='c-s14'>
                        <img src={image.s14} />
                    </div>
                </div>
            )}
            {space === 3 && (
                <div className='space three'>
                    <div className='c-s6'>
                        <img src={image.s6} />
                    </div>
                </div>
            )}
            {space === 4 && (
                <div className='space four'>
                    <div className='c-v1'>
                        <img src={image.v1} />
                    </div>
                    <div className='c-s2'>
                        <img src={image.s2} />
                    </div>
                </div>
            )}
            {space === 5 && (
                <div className='space five'>
                    <div className='c-s4'>
                        <img src={image.s4} />
                    </div>
                    <div className='c-s7'>
                        <img src={image.s7} />
                    </div>
                    <div className='c-n4'>
                        <img src={image.n4} />
                    </div>
                </div>
            )}
            {space === 6 && (
                <div className='space six'>
                    <div className='c-t2'>
                        <img src={image.t2} />
                    </div>
                </div>
            )}
            {space === 7 && (
                <div className='space seven'>
                    <div className='c-t3'>
                        <img src={image.t3} />
                    </div>
                </div>
            )}
            {space === 8 && (
                <div className='space eight'>
                    <div className='c-t4'>
                        <img src={image.t4} />
                    </div>
                </div>
            )}
            {space === 9 && (
                <div className='space nine'>
                    <div className='c-t11'>
                        <img src={image.t11} />
                    </div>
                </div>
            )}
            {space === 10 && (
                <div className='space ten'>
                    <div className='c-t10'>
                        <img src={image.t10} />
                    </div>
                    <div className='c-t5'>
                        <img src={image.t5} />
                    </div>
                </div>
            )}
            {space === 11 && (
                <div className='space eleven'>
                    <div className='c-n2'>
                        <img src={image.n2} />
                    </div>
                    <div className='c-n3'>
                        <img src={image.n3} />
                    </div>
                </div>
            )}
            {space === 12 && (
                <div className='space twelve'>
                    <div className='c-t6'>
                        <img src={image.t6} />
                    </div>
                </div>
            )}
            {space === 13 && (
                <div className='space thirteen'>
                    <div className='c-t1'>
                        <img src={image.t1} />
                    </div>
                </div>
            )}
            {space === 14 && (
                <div className='space fourteen'>
                    <div className='c-n5'>
                        <img src={image.n5} />
                    </div>
                    <div className='c-t9'>
                        <img src={image.t9} />
                    </div>
                </div>
            )}
        </div>
    );
}
