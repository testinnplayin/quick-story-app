'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

import MainTitle from './main-title';
import PhotoAreaContainer from './init-photo-area-container';
// import InitTextAreaContainer from './init-text-area-container';

export class StoryContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let title = this.props.title;

		if (title === 'Quick Story') {
			title = 'Write A Story';

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.getPhoto());
		}
	}


	render() {
		return (
			<main className="storyContainer">
				<MainTitle title={this.props.title} />
				<section className="storyAreaSection">
					<PhotoAreaContainer photo={this.props.photo} photoArea={this.props.photoArea} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	title: state.title,
	buttonName: state.buttonName,
	photoArea: state.photoArea,
	photo: state.photo
});

export default connect(mapStateToProps)(StoryContainer);
