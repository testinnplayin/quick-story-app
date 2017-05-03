'use strict';

import React from 'react';
import {connect} from 'react-redux';
// import Spinner from 'react-spinkit';

import Image from '../components/image';

export class PhotoAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.photoIsLoading) {
			return (
				<section className="photoAreaContainer">
					<h3>Loading...</h3>
				</section>
			);
		} else {
			return (
				<section className="photoAreaContainer">
					<p>{this.props.photoArea}</p>
					<Image
						photo={this.props.photo}
						photoBtn={this.props.photoBtn}/>
				</section>
			);
		}
	}
};

const mapStateToProps = (state, props) => ({
	photoIsLoading : state.syncReducer.photoIsLoading
});

export default connect(mapStateToProps)(PhotoAreaContainer);
