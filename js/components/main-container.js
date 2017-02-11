'use strict';

import React from 'react';
import {connect} from 'react-redux';

import NavBar from './navbar';

export class MainContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="mainContainer">
				<NavBar />
				{this.props.children}	
			</div>
		);
	}
};



export default connect()(MainContainer);