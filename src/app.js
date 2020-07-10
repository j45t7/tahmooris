import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import animation from './animation';
import modelAnimation from './animation-model';
import textAnimation from './animation-text';

export default class App extends React.Component {
    componentDidMount() {
        // animation(this.mount);
        textAnimation(this.mount);
        // modelAnimation(this.mount);
    }
    render() {
        return <div className='animation' ref={ref => (this.mount = ref)} />;
    }
}
