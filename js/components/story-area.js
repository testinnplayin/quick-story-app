'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Photo from './photo';

export class StoryArea extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.photo);
	}

	render() {
		return (
			<div className="storyArea">
				<Photo photo={this.props.photo}  />
			</div>
		);
	}
};

export default connect()(StoryArea);