'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/index';

export class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.handleStoriesClick = this.handleStoriesClick.bind(this);
		this.handleHomeClick = this.handleHomeClick.bind(this);
	}

	handleHomeClick(e) {
		let title = this.props.title,
			photoArea = this.props.photoArea;

		title = 'Quick Story',
		photoArea = 'Click on Get Random Photo button to begin!';

		this.props.dispatch(actions.changeTitle(title));
		this.props.dispatch(actions.changePhotoArea(photoArea));
		
	}

	handleStoriesClick(e) {
		let title = this.props.title,
			photoArea = this.props.photoArea;

		if (title === 'Write A Story' && photoArea === 'Click on Write to begin writing or click on Get New Photo to get a new random photo') {
			title = 'List of Stories',
			photoArea = 'Click on a story below to edit or delete it';

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.changePhotoArea(photoArea));
		}
	}

	render() {
		return (
			<header className="navBar">
				<nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						<ul className="nav navbar-nav nav-pills">
							<li className="homeButton"><Link to='/' onClick={this.handleHomeClick}>Home</Link></li>
							<li className="storiesButton"><Link to='/stories' onClick={this.handleStoriesClick}>Stories</Link></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
};

export default connect()(NavBar);