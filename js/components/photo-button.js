'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class PhotoButton extends React.Component {
	constructor(props) {
		super(props);

		this.handleGetPhotoClick = this.handleGetPhotoClick.bind(this);
	}

	handleGetPhotoClick(e) {
		e.preventDefault();

		this.props.dispatch(actions.getPhoto(this.props.photo));
	}

	render() {
		return (
			<button className="photoButton" type="button" onClick={this.handleGetPhotoClick}>Get New Photo</button>
		);
	}
};

export default connect()(PhotoButton);