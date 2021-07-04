import React, { Component } from 'react';
import '../styles/navBar.css';
class Navbar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <nav className="navBar">
                    <div className="nav-container">
                        <div className="navList">
                            <ul className="navLinks">
                                <li className="link">
                                    <img src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" height="40%"/>
                                </li>
                                <li className="link">
                                    <a href="#">Creative Cloud</a>
                                </li>
                                <li className="link">
                                    <a href="#">Experience Cloud</a>
                                </li>
                                <li className="link">
                                    <a href="">Document Cloud</a>
                                </li>
                            </ul>
                        </div>

                        <div className="signUpWrapper">
                            <ul className="navLinks">
                                <li>Sign up</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }

}

export default Navbar;