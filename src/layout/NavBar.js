import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <div className="container">
                        <a href="/" className="navbar-brand mr-auto">
                            <h2>G<span>.pa</span> </h2>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                            <span className="toggler-icon">
                                <i className="fas fa-bars"></i>
                            </span>
                        </button> 
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
