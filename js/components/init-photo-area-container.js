'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class InitPhotoAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="initPhotoAreaContainer">
				<p>{this.props.photoArea}</p>
			</div>
		);
	}
};

export default connect()(InitPhotoAreaContainer);