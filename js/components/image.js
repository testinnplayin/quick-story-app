'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class Image extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="image">
				<img src={this.props.photoArea} alt='placeholder alt' />
			</div>
		);
	}
};

export default connect()(Image);