'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Photo from './photo';
import Story from './story';

export class StoryMainArea extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.photo);
	}

	render() {
		return (
			<div className="storyMainArea">
				<h1>New Story</h1>
				<Photo />
				<Story />
			</div>
		);
	}
};

export default connect()(StoryMainArea);