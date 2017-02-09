'use strict';

import React from 'react';
import {connect} from 'react-redux';

import PhotoButton from './photo-button';

export class InitialMainArea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="initialMainArea">
				<PhotoButton photo={this.props.photo} getPhoto={this.props.getPhoto} />
			</section>
		);
	}
};

export default connect()(InitialMainArea);