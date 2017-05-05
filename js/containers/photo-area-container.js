'use strict';

import React from 'react';
import {connect} from 'react-redux';

import ImageContainer from '../containers/image-container';
import * as actions from '../actions/index';

export class PhotoAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const photoIsLoading = this.props.photoIsLoading;

		this.props.dispatch(actions.togglePhotoLoading(photoIsLoading));
	}

	componentDidUpdate(prevProps, prevState) {
		const photoIsLoading = this.props.photoIsLoading;

		if (this.props.photoIsLoading) {
			this.props.dispatch(actions.togglePhotoLoading(photoIsLoading));
		}
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
					<ImageContainer
						photo={this.props.photo}
						photoBtn={this.props.photoBtn}
						showInitTextCont={this.props.showInitTextCont}/>
				</section>
			);
		}
	}
};

const mapStateToProps = (state, props) => ({
	photoIsLoading : state.toggleReducer.photoIsLoading
});

export default connect(mapStateToProps)(PhotoAreaContainer);
