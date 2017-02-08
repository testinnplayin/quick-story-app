'use strict';

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Navbar from './navbar';
import MainArea from './main-area';

export class MainContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="mainContainer">
				<Navbar />
				<main>
					<section className="introductory-section">
						<h1>Quick Story!</h1>
						<span><strong>The random photo story app</strong></span>
						<p>Clicking on <i>Get New Photo</i> will load a random photo from Upsplash. Write a story that the photo invokes or click on the button to get a new random photo.</p>
					</section>
					<MainArea />
				</main>
			</div>
		);
	}
};

const mapStateToProps = (state, props) => ({
	photo: state.photo
});

export default connect(mapStateToProps)(MainContainer);