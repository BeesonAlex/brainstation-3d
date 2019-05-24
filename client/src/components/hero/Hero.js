import React, { Component } from 'react';
import './Hero.scss';

export class Hero extends Component {
    render() {
        return (
            <div className="hero-wrapper">
            <h2 className="hero-statement"></h2>
            <select className="dropdown">
                <option className="dropdown__whats" value="hello">What's Trending?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            
            </div>
        )
    }
}

export default Hero
