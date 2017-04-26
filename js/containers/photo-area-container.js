'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Image from '../components/image';

export class PhotoAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="photoAreaContainer">
				<p>{this.props.photoArea}</p>
				<Image photo={this.props.photo}/>
			</section>
		);
	}
};

export default connect()(PhotoAreaContainer);
