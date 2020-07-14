import React from 'react';
import animation from './animation-points';

export default class Home extends React.Component {
    componentDidMount() {
        const container = document.querySelector('.animation');
        animation(container);
    }
    render() {
        return (
            <div className='home'>
                <div className='background'>
                    <img src='/images/v7.jpg' />
                </div>
                <div className='animation' />
            </div>
        );
    }
}
