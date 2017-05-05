'use strict';

import React from 'react';
import {connect} from 'react-redux';

import StoryArea from '../components/story-area';

import * as actions from '../actions/index';

export class StoryAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let pathArr = (this.props.location.pathname).split('/'),
			id = pathArr[2],
			showStoryArea = this.props.showStoryArea;
		showStoryArea = true;
		this.props.dispatch(actions.fetchStory(id));
		this.props.dispatch(actions.toggleShowStoryArea(showStoryArea));
	}

	render() {
		if (this.props.showStoryArea) {
			return (
				<div className="storyAreaContainer container-fluid">
					<StoryArea
						userTitle={this.props.story.title}
						userStory={this.props.story.userStory}
						newAuthor={this.props.story.authorString}
						storyId={this.props.story.id} />
				</div>
			);
		} else {
			return (
				<div className="storyAreaContainer container-fluid"></div>
			);
		}
	}
};

const mapStateToProps = (state, props) => ({
	showStoryArea : state.toggleReducer.showStoryArea,
	story : state.crudReducer.story
});

export default connect(mapStateToProps)(StoryAreaContainer);
