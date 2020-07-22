import React, { useEffect } from 'react';
import animation from './animation-points';
import { large, small } from './files';

export default function Home() {
    useEffect(() => {
        const container = document.querySelector('.animation');
        animation(container);
    }, []);

    return (
        <div className='home'>
            <div className='background'>
                <img
                    srcSet={`${large.v7} 1600w, ${small.v7} 600w`}
                    sizes='(max-width: 600px) 100vw, 100vw'
                    src={large.v7}
                    alt='Aerial view of a person walking through a snowy forest in winter'
                />
            </div>
            <div className='animation' />
        </div>
    );
}
