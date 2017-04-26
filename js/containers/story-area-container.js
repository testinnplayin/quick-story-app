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
			id = pathArr[2];

		this.props.dispatch(actions.fetchStory(id));
	}

	render() {
		return (
			<div className="storyAreaContainer container-fluid">
				<StoryArea userTitle={this.props.userTitle} userStory={this.props.userStory} newAuthor={this.props.newAuthor} story={this.props.story} />
			</div>
		);
	}
};

const mapStateToProps = (state, props) => ({
	userTitle: state.userTitle,
	userStory: state.userStory,
	author: state.author,
	story: state.story,
	newAuthor: state.newAuthor,
	id: state.id
});

export default connect(mapStateToProps)(StoryAreaContainer);
