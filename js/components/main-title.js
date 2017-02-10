'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class MainTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="mainTitle">
				<h1>Test Title</h1>
			</section>
		);
	}
};

export default connect()(MainTitle);