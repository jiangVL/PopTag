import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './../css/NavigationBar.css';

class NavigationBar extends Component {
    constructor() {
        super();
        this.state = {
            burgerMenuDisplay: false
        }

        this.hamburgerMenuToggle = this.hamburgerMenuToggle.bind(this);
    }

    hamburgerMenuToggle() {
        this.setState(() => {return {burgerMenuDisplay: !this.state.burgerMenuDisplay}});

    }

    render() {
        return (
                <nav>
                    <div className="navBarWide">
                        <FontAwesome name="hashtag" tag="i" className="navBarIcon" size="2x"/>
                        <div className="wideMenu">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Login</a>
                            <a href="#">Sign up</a>
                        </div>
                    </div>

                    <div className="navBarNarrow">

                        <div className="navBarIconHeader">
                            <FontAwesome name="hashtag" className="navBarIcon" size="2x"/>

                            <FontAwesome name="bars" tag="i" size="2x" className="burgerNavBar" onClick={this.hamburgerMenuToggle}/>
                        </div>

                        <div className={this.state.burgerMenuDisplay ? "narrowMenu" : "narrowMenu narrowMenuHidden"}>
                            <a className="links" href="#">Home</a>
                            <a className="links" href="#">About</a>
                            <a className="links" href="#">Contact</a>
                            <a className="links" href="#">Sign up</a>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default NavigationBar;
