'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from './main-title';
// import InitPhotoAreaContainer from './init-photo-area-container';
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
					
				</section>
			</main>
		);
	}
};

export default connect()(StoryContainer);