import React, { useEffect } from 'react';
import animation from './animation-points';
import { files as image } from './files';

export default function Home() {
    useEffect(() => {
        const container = document.querySelector('.animation');
        animation(container);
    }, []);

    return (
        <div className='home'>
            <div className='background'>
                <img src={image.v7} />
            </div>
            <div className='animation' />
        </div>
    );
}
