import React from 'react';
import animation from './animation-points';
import { files as image } from './files';

export default class Home extends React.Component {
    componentDidMount() {
        const container = document.querySelector('.animation');
        animation(container);
    }
    render() {
        return (
            <div className='home'>
                <div className='background'>
                    <img src={image.v7} />
                </div>
                <div className='animation' />
            </div>
        );
    }
}
