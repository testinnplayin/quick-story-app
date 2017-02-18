'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="navBar">
				<nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						<ul className="nav navbar-nav nav-pills">
							<li className="homeButton"><Link to='/'>Home</Link></li>
							<li className="storiesButton"><Link to='/stories'>Stories</Link></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
};

export default connect()(NavBar);