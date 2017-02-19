'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from './main-title';
import StoriesList from './stories-list';

export class StoriesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main className="storiesContainer">
				<MainTitle title={this.props.title} />
				<section className="storyListArea">
					<StoriesList stories={this.props.stories} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	stories: state.stories
});

export default connect(mapStateToProps)(StoriesContainer);