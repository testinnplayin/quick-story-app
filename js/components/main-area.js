'use strict';

import React from 'react';
import {connect} from 'react-redux';

import PhotoButton from './photo-button';
import StoryArea from './story-area';

export class MainArea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="mainArea">
				<StoryArea photo={this.props.photo} photoArea={this.props.photoArea} getPhoto={this.props.getPhoto} /> 
				<PhotoButton photo={this.props.photo} getPhoto={this.props.getPhoto} photoArea={this.props.photoArea} />
			</section>
		);
	}
};

export default connect()(MainArea);