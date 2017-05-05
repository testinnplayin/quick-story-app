'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

import * as actions from '../actions/index';

export class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.handleHomeClick = this.handleHomeClick.bind(this);
	}

	handleHomeClick() {
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
				<Navbar className="mainNav" role="navigation">
					<Navbar .Brand>
						<a
							id="navbarHomeClick"
							href="/"
							onClick={this.handleHomeClick}>
							Home
						</a>
					</Navbar .Brand>
					<Navbar .Toggle />
					<Navbar .Collapse>
						<ul>
							<Link
								to='/stories'
								className="storiesButton btn btn-default">
								Stories
							</Link>
						</ul>
					</Navbar .Collapse>
				</Navbar>
			</header>
		);
	}
}

export default connect()(NavBar);
