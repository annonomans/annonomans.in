import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
// import { Route, Switch, Link } from "react-router-dom";

class Header extends Component {

	render() {
        const site_title = "annonomans"
    	return (	

            <div>
                <h2>Hello , {site_title}</h2>
                <nav>
                    <ul id="navigation">
                        <li>
                        <h3>Home</h3>
                        </li>
                        <li>
                        <h3>About</h3>
                        </li>
                        <li>
                        <h3>Contact</h3>
                        </li>
                    </ul>
                </nav>
            </div>
    		
    		);
  	}
}

export default Header;