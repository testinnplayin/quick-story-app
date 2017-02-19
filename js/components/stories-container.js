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
				<StoriesList />
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	stories: state
});

export default connect(mapStateToProps)(StoriesContainer);