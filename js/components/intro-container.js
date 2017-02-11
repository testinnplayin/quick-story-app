'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class IntroContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="introContainer">
				<div></div>
				<div></div>
			</section>
		);
	}
};

export default connect()(IntroContainer);