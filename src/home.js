import React from 'react';
// import animation from './animation';
import animation from './animation-no-controls';
// import modelAnimation from './animation-model';
import textAnimation from './animation-text';

export default class Home extends React.Component {
    componentDidMount() {
        animation(this.mount);
        // textAnimation(this.mount);
        // modelAnimation(this.mount);
    }
    render() {
        return <div className='animation' ref={ref => (this.mount = ref)} />;
    }
}
