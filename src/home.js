import React from 'react';
import { Link } from 'react-router-dom';

// import animation from './animation';
import animation from './animation-no-controls';
// import modelAnimation from './animation-model';
import textAnimation from './animation-text';

export default class Home extends React.Component {
    componentDidMount() {
        const container = document.querySelector('.animation');
        animation(container);
        // textAnimation(container);
        // modelAnimation(container);
    }
    render() {
        return (
            <div className='home'>
                <img className='background' src='/images/n2.jpg' />
                <div className='animation' />
            </div>
        );
    }
}
