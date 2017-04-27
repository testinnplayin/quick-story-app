'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/index';

export class NavBar extends React.Component {
	constructor(props) {
		super(props);

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

	render() {
		return (
			<header className="navBar">
				<nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						<ul className="nav navbar-nav nav-pills">
							<li className="homeButton">
								<Link
									id="navbarHomeClick"
									to='/'
									onClick={this.handleHomeClick}>
									Home
								</Link>
							</li>
							<li className="storiesButton"><Link to='/stories'>Stories</Link></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
};

export default connect()(NavBar);
