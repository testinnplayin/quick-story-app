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
				<nav>
					<ul>
						<li className="homeButton"><Link to='/'>Home</Link></li>
						<li className="storiesButton"><Link to='/stories'>Stories</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
};

export default connect()(NavBar);