import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
// import { Route, Switch, Link } from "react-router-dom";

class Header extends Component {

	render() {
        const site_title = "annonomans"
        let message;
        var today = new Date()
            var curHr = today.getHours()

            if (curHr < 12) {
            message = "Good Morning !"
            } else if (curHr < 18) {
                message = 'Good Afternoon !'
            } else {
                message = 'Good Evening !'
            }

    	return (	

            <div className="center">
                <h2>Hello , {site_title} !</h2>
                <h3>{message}</h3>
                
            </div>
    		
    		);
  	}
}

export default Header;