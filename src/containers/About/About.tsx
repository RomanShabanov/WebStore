import React, { Component } from 'react';

import { LazyImage } from '../../components';

import explodedBurger from '../../assets/images/exploded-burger.jpg';

import './About.scss';

class About extends Component {
    render() {
        return <div className="About">
            <div className="wrapper">
                <h1>About</h1>
                <h3>Our Mission</h3>

                <p>Esse officia culpa ad Lorem laboris est Lorem nulla. Voluptate tempor anim Lorem incididunt et veniam do aute id proident consequat ea pariatur eu. Voluptate Lorem ut dolor exercitation incididunt in velit anim aliqua ea. Anim laborum commodo mollit officia minim velit ut. Ullamco culpa ipsum cillum incididunt sint ullamco commodo fugiat aliqua sint aliquip et. Consequat sit in sunt elit incididunt irure veniam sunt officia ad laborum exercitation minim ullamco.</p>

                <h3>Our Promise</h3>

                <p>Labore duis aliquip laborum amet occaecat aute nisi consequat. Tempor fugiat id cupidatat velit laboris cupidatat quis ut eu irure. Consectetur nulla labore dolor irure voluptate ullamco minim.</p>

                <LazyImage src={explodedBurger} />
            </div>
        </div>
    }
}

export default About;