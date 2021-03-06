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
				<h1>{this.props.title}</h1>
			</section>
		);
	}
};

export default connect()(MainTitle);