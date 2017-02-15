'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

import MainTitle from './main-title';
import PhotoAreaContainer from './photo-area-container';
import ButtonArea from './button-area';

export class StoryContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let title = this.props.title,
			photoArea = this.props.photoArea,
			buttonNames = this.props.buttonName,
			rightBtn = this.props.rightBtn;

		if (title === 'Quick Story' && photoArea === 'Click on Get Random Photo button to begin!') {
			title = 'Write A Story';
			photoArea = 'Click on Write to begin writing or click on Get New Photo to get a new random photo';

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.getPhoto());
			this.props.dispatch(actions.changePhotoArea(photoArea));
		} 
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	let photoArea = this.props.photoArea;

	// 	console.log('!!!!!!!!!!!!');
	// 	console.log(photoArea);
	// }

	render() {
		return (
			<main className="storyContainer">
				<MainTitle title={this.props.title} />
				<section className="storyAreaSection">
					<PhotoAreaContainer photo={this.props.photo} photoArea={this.props.photoArea} />
					{this.props.children}
					<ButtonArea photoBtn={this.props.photoBtn} leftBtn={this.props.leftBtn} rightBtn={this.props.rightBtn} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	title: state.title,
	leftBtn: state.leftBtn,
	photoBtn: state.photoBtn,
	rightBtn: state.rightBtn,
	photoArea: state.photoArea,
	photo: state.photo
});

export default connect(mapStateToProps)(StoryContainer);
