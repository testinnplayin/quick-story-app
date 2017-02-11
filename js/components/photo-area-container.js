'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class PhotoAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="photoAreaContainer">
				<p>Click on Get Random Photo button to begin!</p>
			</div>
		);
	}
};

export default connect()(PhotoAreaContainer);