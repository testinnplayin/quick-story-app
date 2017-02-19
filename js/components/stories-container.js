'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from './main-title';

export class StoriesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main className="storiesContainer">
				<MainTitle title={this.props.title} />
				<section className="storiesAreaSection">

				</section>
			</main>
		);
	}
};

export default connect()(StoriesContainer);