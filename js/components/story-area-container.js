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
				<StoryArea userTitle={this.props.userTitle} userStory={this.props.userStory} author={this.props.author} storyId={this.props.storyId} />
			</div>
		);
	}
};

const mapStateToProps = (state, props) => ({
	userTitle: state.userTitle,
	userStory: state.userStory,
	author: state.author,
	storyId: state.storyId
});

export default connect()(StoryAreaContainer);