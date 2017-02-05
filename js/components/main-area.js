'use strict';

import React from 'react';

export default class MainArea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="mainArea">
				<button className="get-photo-btn" type="button">Get New Photo</button>
			</section>
		);
	}
};