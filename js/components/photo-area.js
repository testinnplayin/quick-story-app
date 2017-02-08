'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class PhotoArea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="photoArea">
				<img src={this.props.photo} alt='random photo useful for story telling' />
			</div>
		);
	}
};

export default connect()(PhotoArea);