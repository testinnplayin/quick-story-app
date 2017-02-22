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
				<NavBar title={this.props.photoArea} photoArea={this.props.photoArea} />
				{this.props.children}	
			</div>
		);
	}
};

const mapStatetoProps = (state, props) => ({
	title: state.title,
	photoArea: state.photoArea
});

export default connect()(MainContainer);