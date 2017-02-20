'use strict';

import React from 'react';
import {connect} from 'react-redux';

import StoryArea from './story-area';

export class StoryAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="storyAreaContainer">
				<StoryArea />
			</div>
		);
	}
};