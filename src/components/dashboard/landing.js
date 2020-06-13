import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/dashboard/landing.css';
import { Slider } from './slider';

export default function landing() {
    return (
        <div className="container ">
            <div className="center Home">
                <Slider/>
                <p>Watch and Download KFTV movies</p>
                <Link to="/login" className="btn large blue darken-5">Get Started</Link>
            </div>
        </div>
    )
}
