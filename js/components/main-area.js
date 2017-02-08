'use strict';

import React from 'react';
import {connect} from 'react-redux';

import PhotoButton from './photo-button';

export class MainArea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="mainArea">
				<PhotoButton photo={this.props.photo} getPhoto={this.props.getPhoto} />
				<div className="photoArea">
					
				</div>
			</section>
		);
	}
};

export default connect()(MainArea);