'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class Image extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<img src={this.props.photoArea} alt='placeholder alt' />
		);
	}
};