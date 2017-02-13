'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from './main-title';
import PhotoAreaContainer from './init-photo-area-container';
// import InitTextAreaContainer from './init-text-area-container';

export class StoryContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main className="storyContainer">
				<MainTitle title={this.props.title} />
				<section className="storyAreaSection">
					<PhotoAreaContainer />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	title: state.title,
	buttonName: state.buttonName,
	photoArea: state.photoArea
});

export default connect(mapStateToProps)(StoryContainer);
