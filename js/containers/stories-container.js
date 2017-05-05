'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from '../components/main-title';
import StoriesList from '../components/stories-list';

import * as actions from '../actions/index';

export class StoriesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let title = this.props.title,
			photoArea = this.props.photoArea;

		title = 'List of Stories';
		photoArea = 'Click on a story below to edit or delete it';

		this.props.dispatch(actions.changeTitle(title));
		this.props.dispatch(actions.changePhotoArea(photoArea));
		this.props.dispatch(actions.fetchStories());
	}

	render() {
		return (
			<main className="storiesContainer">
				<MainTitle title={this.props.title} />
				<section className="storyListArea">
					<p>{this.props.photoArea}</p>
					<StoriesList
						stories={this.props.stories}
						title={this.props.title}
						photoArea={this.props.photoArea} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	stories: state.crudReducer.stories,
	title: state.syncReducer.title,
	photoArea: state.syncReducer.photoArea
});

export default connect(mapStateToProps)(StoriesContainer);
