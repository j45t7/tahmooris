import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Swipeable } from 'react-swipeable';
import { large, small } from './files';

export default function Gallery(props) {
    const [space, setSpace] = useState();
    const [nextSpace, setNextSpace] = useState();
    const [previousSpace, setPreviousSpace] = useState();
    const history = useHistory();
    const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    useEffect(() => {
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
        if (e.key === 'ArrowRight' || e.key === 'Right') {
            if (space === spaces.length) {
                history.push(`/work/1`);
                setSpace(1);
            } else {
                history.push(`/work/${space + 1}`);
                setSpace(space + 1);
            }
        }
        if (e.key === 'ArrowLeft' || e.key === 'Left') {
            if (space === 1) {
                history.push(`/work/${spaces.length}`);
                setSpace(spaces.length);
            } else {
                history.push(`/work/${space - 1}`);
                setSpace(space - 1);
            }
        }
    };

    const swipeNext = () => {
        if (space === spaces.length) {
            history.push(`/work/1`);
            setSpace(1);
        } else {
            history.push(`/work/${space + 1}`);
            setSpace(space + 1);
        }
    };

    const swipePrevious = () => {
        if (space === 1) {
            history.push(`/work/${spaces.length}`);
            setSpace(spaces.length);
        } else {
            history.push(`/work/${space - 1}`);
            setSpace(space - 1);
        }
    };

    return (
        <div className='gallery'>
            <div className='gallery-nav noSelect'>
                <Link
                    onClick={clickPrevious}
                    className='previous'
                    to={`/work/${previousSpace}`}>
                    <div className='previous noSelect'></div>
                </Link>
                <Link
                    onClick={clickNext}
                    className='next'
                    to={`/work/${nextSpace}`}>
                    <div className='next noSelect'></div>
                </Link>
            </div>
            {/* <Swipeable
                onSwipedLeft={swipeNext}
                onSwipedRight={swipePrevious}
                className='gallery-nav-touch'
            /> */}
            {space === 1 && (
                <div className='space one'>
                    <div className='c-l2'>
                        <img
                            srcSet={`${large.l2} 800w, ${small.l2} 300w`}
                            sizes='(max-width: 600px) 300px, 800px'
                            src={large.l2}
                            alt='A hand in water'
                        />
                    </div>
                    <div className='c-f2'>
                        <img
                            srcSet={`${large.f2} 800w, ${small.f2} 300w`}
                            sizes='(max-width: 600px) 300px, 800px'
                            src={large.f2}
                            alt='A rose bush in front of a shed'
                        />
                    </div>
                </div>
            )}
            {space === 2 && (
                <div className='space two'>
                    <div className='c-v16'>
                        <img
                            srcSet={`${large.v16} 2000w, ${small.v16} 1000w`}
                            sizes='(max-width: 600px) 100vw, 100vw'
                            src={large.v16}
                            alt='Aerial view of countryside covered in winter snow'
                        />
                    </div>
                    <div className='c-s14'>
                        <img
                            srcSet={`${large.s14} 800w, ${small.s14} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.s14}
                            alt='The neck and armpit of a man'
                        />
                    </div>
                </div>
            )}
            {space === 3 && (
                <div className='space three'>
                    <div className='c-s6'>
                        <img
                            srcSet={`${large.s6} 800w, ${small.s6} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.s6}
                            alt='The head and shoulders of a naked woman viewed from behind'
                        />
                    </div>
                </div>
            )}
            {space === 4 && (
                <div className='space four'>
                    <div className='c-v7'>
                        <img
                            srcSet={`${large.v7} 800w, ${small.v7} 600w`}
                            sizes='(max-width: 600px) 100vw, 50vw'
                            src={large.v7}
                            alt='Aerial view of a person walking through a snowy forest in winter'
                        />
                    </div>
                    <div className='c-v8'>
                        <img
                            srcSet={`${large.v8} 800w, ${small.v8} 600w`}
                            sizes='(max-width: 600px) 100vw, 50vw'
                            src={large.v8}
                            alt='Aerial view of a city in winter'
                        />
                    </div>
                    {/* <div className='c-s2'>
                        <img
                            srcSet={`${large.s2} 800w, ${small.s2} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.s2}
                            alt='The wet face of a young man viewed in profile'
                        />
                    </div> */}
                </div>
            )}
            {space === 5 && (
                <div className='space five'>
                    <div className='c-s4'>
                        <img
                            srcSet={`${large.s4} 800w, ${small.s4} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.s4}
                            alt='The face of a young woman lying in grass, viewed in profile'
                        />
                    </div>
                    <div className='c-s7'>
                        <img src={large.s7} alt='A dead flower' />
                    </div>
                    <div className='c-n4'>
                        <img
                            srcSet={`${large.n4} 800w, ${small.n4} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.n4}
                            alt='An icy river by night'
                        />
                    </div>
                </div>
            )}
            {space === 6 && (
                <div className='space six'>
                    <div className='c-t2'>
                        <img
                            srcSet={`${large.t2} 800w, ${small.t2} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.t2}
                            alt='The face of a young man in half-profile'
                        />
                    </div>
                </div>
            )}
            {space === 7 && (
                <div className='space seven'>
                    <div className='c-t3'>
                        <img
                            srcSet={`${large.t3} 800w, ${small.t3} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.t3}
                            alt='The face and upper torso of a young woman'
                        />
                    </div>
                </div>
            )}
            {space === 8 && (
                <div className='space eight'>
                    <div className='c-t4'>
                        <img
                            srcSet={`${large.t4} 800w, ${small.t4} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.t4}
                            alt='The face and upper torso of a shirtless young man'
                        />
                    </div>
                </div>
            )}
            {space === 9 && (
                <div className='space nine'>
                    <div className='c-t11'>
                        <img
                            srcSet={`${large.t11} 800w, ${small.t11} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.t11}
                            alt='A close-up view of the face of a young person with a bee on it'
                        />
                    </div>
                </div>
            )}
            {space === 10 && (
                <div className='space ten'>
                    <div className='c-t10'>
                        <img
                            srcSet={`${large.t10} 800w, ${small.t10} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.t10}
                            alt='The upper torso of a man from the side'
                        />
                    </div>
                    <div className='c-t5'>
                        <img
                            srcSet={`${large.t5} 800w, ${small.t5} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.t5}
                            alt='The face and shoulders of a young woman, half turned'
                        />
                    </div>
                </div>
            )}
            {space === 11 && (
                <div className='space eleven'>
                    <div className='c-n2'>
                        <img
                            srcSet={`${large.n2} 800w, ${small.n2} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.n2}
                            alt='Waves breaking in the sea'
                        />
                    </div>
                    <div className='c-n3'>
                        <img
                            srcSet={`${large.n3} 800w, ${small.n3} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.n3}
                            alt='Two white swans at night'
                        />
                    </div>
                </div>
            )}
            {space === 12 && (
                <div className='space twelve'>
                    <div className='c-t6'>
                        <img
                            srcSet={`${large.t6} 800w, ${small.t6} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.t6}
                            alt='The head and shoulders of a shirtless young man, half profile'
                        />
                    </div>
                </div>
            )}
            {space === 13 && (
                <div className='space thirteen'>
                    <div className='c-t1'>
                        <img
                            srcSet={`${large.t1} 800w, ${small.t1} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.t1}
                            alt='The head and upper torso of a young man, half profile'
                        />
                    </div>
                </div>
            )}
            {space === 14 && (
                <div className='space fourteen'>
                    <div className='c-n5'>
                        <img
                            srcSet={`${large.n5} 1800w, ${small.n5} 1200w`}
                            sizes='(max-width: 600px) 100vw, 100vw'
                            src={large.n5}
                            alt='Vegetation'
                        />
                    </div>
                    <div className='c-t9'>
                        <img
                            srcSet={`${large.t9} 800w, ${small.t9} 600w`}
                            sizes='(max-width: 600px) 600px, 800px'
                            src={large.t9}
                            alt='The head and upper torso of a shirtless man, from behind'
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
