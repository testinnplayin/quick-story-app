'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

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
						<Nav>
							<NavItem
								eventKey={1}
								href='/stories'
								className="storiesButton">
								Stories
							</NavItem>
						</Nav>
					</Navbar .Collapse>
				</Navbar>
			</header>
		);
	}
};

export default connect()(NavBar);
