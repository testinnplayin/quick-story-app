'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from './main-title';
import StoriesList from './stories-list';

import * as actions from '../actions/index';

export class StoriesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let title = this.props.title,
			photoArea = this.props.photoArea;

		if (title === 'Quick Story' && photoArea === 'Click on Get Random Photo button to begin!') {
			title = 'List of Stories';
			photoArea = 'Click on a story below to edit or delete it';

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.changePhotoArea(photoArea));
		}

		this.props.dispatch(actions.fetchStories());
	}

	render() {
		return (
			<main className="storiesContainer">
				<MainTitle title={this.props.title} />
				<section className="storyListArea">
					<p>{this.props.photoArea}</p>
					<StoriesList stories={this.props.stories} id={this.props.id} title={this.props.title} photoArea={this.props.photoArea} handleLinkClick={this.props.handleLinkClick} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	stories: state.stories,
	title: state.title,
	photoArea: state.photoArea
});

export default connect(mapStateToProps)(StoriesContainer);