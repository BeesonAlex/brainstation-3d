import React, { Component } from 'react'
import "./Navbar.scss"

export class Navbar extends Component {
    render() {
        return (
            <header className="navbar-wrapper">
            <h1 className="logo">Pathfinder</h1>
            </header>
        )
    }
}

export default Navbar;
