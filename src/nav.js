import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default function Nav() {
    return (
        <nav>
            <Link to='/'>
                <p>Home</p>
            </Link>
            <Link to='/work'>
                <p>Work</p>
            </Link>
            <p>Contact</p>
        </nav>
    );
}
