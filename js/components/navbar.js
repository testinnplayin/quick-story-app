'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<nav className="navbar navbar-default">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Stories</a></li>
					</ul>
				</nav>
		</header>
		);
	}
};

export default connect()(Navbar);