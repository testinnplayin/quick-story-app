'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class Photo extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="photo">
				<img src={this.props.photo} alt="description of photo" value={this.props.photo} />
			</div>
		);
	}

};