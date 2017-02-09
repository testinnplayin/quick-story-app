'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class PhotoButton extends React.Component {
	constructor(props) {
		super(props);

		this.handleGetPhotoClick = this.handleGetPhotoClick.bind(this);
	}

	handleGetPhotoClick(e) {
		e.preventDefault();
		let photo = this.props.photo,
			photoArea = !(this.props.photoArea);
			
		this.props.dispatch(actions.getPhoto(photo));
		// this.props.dispatch(actions.showPhotoArea(photoArea));
	}

	render() {
		return (
			<button className="photoButton" type="button" onClick={this.handleGetPhotoClick}>Get New Photo</button>
		);
	}
};

export default connect()(PhotoButton);