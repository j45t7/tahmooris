import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default function Header() {
    return (
        <header>
            {location.pathname != '/' && (
                <nav>
                    <Link to='/'>
                        <p>HOME</p>
                    </Link>
                    <p>TAHMOORIS RAMAZANKHANI</p>
                </nav>
            )}
            {location.pathname != '/work' && (
                <nav>
                    <Link to='/work'>
                        <p>WORK</p>
                    </Link>
                </nav>
            )}
        </header>
    );
}
