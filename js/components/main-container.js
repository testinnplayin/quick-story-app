'use strict';

import React from 'react';
import {connect} from 'react-redux';

import NavBar from './navbar';
import MainTitle from './main-title';

export class MainContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="mainContainer">
				<NavBar />
				<main>
					<MainTitle />
				</main>
			</div>
		);
	}
};

export default connect()(MainContainer);