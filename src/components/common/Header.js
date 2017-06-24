import React, { Component } from 'react';
require('./header.css');
class Header extends Component {
  render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <img className='logo-image' src='images/logo5.png'/>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="work"><i className="material-icons left">work</i>Work Experience</a></li>
                    <li><a href="education"><i className="material-icons left">assignment</i>Education</a></li>
                    <li><a href="education"><i className="material-icons left">view_week</i>Projects</a></li>
                    <li><a href="education"><i className="material-icons left">email</i>Contact Me</a></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                    <li><a href="work"><i className="material-icons left">work</i>Work Experience</a></li>
                    <li><a href="education"><i className="material-icons left">assignment</i>Education</a></li>
                    <li><a href="education"><i className="material-icons left">view_week</i>Projects</a></li>
                    <li><a href="education"><i className="material-icons left">email</i>Contact Me</a></li>
                </ul>
                </div>
            </nav>
        );
  }
}

export default Header;