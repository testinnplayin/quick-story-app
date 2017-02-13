'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Image from './image';

export class PhotoAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.dispatch(actions.getPhoto());
		this.props.setPhotoArea(actions.setPhotoArea);
	}

	render() {
		return (
			<section className="photoAreaContainer">
				<Image photoArea={this.props.photoArea} />
			</section>
		);
	}
};

export default connect()(PhotoAreaContainer);