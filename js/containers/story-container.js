'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

import MainTitle from '../components/main-title';
import PhotoAreaContainer from './photo-area-container';
import ButtonArea from '../components/button-area';

export class StoryContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let title = this.props.title,
			photoArea = this.props.photoArea,
			rightBtn = this.props.rightBtn,
			leftBtn = this.props.leftBtn,
			rightBtnAddr = this.props.rightBtnAddr,
			leftBtnAddr = this.props.leftBtnAddr;

		if (title === 'Quick Story' && photoArea === 'Click on Get Random Photo button to begin!') {
			title = 'Write A Story';
			photoArea = 'Click on Write to begin writing or click on Get New Photo to get a new random photo';

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.getPhoto());
			this.props.dispatch(actions.changePhotoArea(photoArea));
		} else if (title === 'List of Stories' && photoArea === 'Click on a story below to edit or delete it') {
			let pathArr = this.props.location.pathname.split('/'),
				id = pathArr[2];

			title = 'Your Story',
			photoArea = 'Click on Edit to edit your story, Delete to delete it or get a new random photo!',
			rightBtn = 'Edit',
			leftBtn = 'Delete',
			rightBtnAddr = `/story/edit/${id}`,
			leftBtnAddr = `/story/delete/${id}`;

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.changePhotoArea(photoArea));
			this.props.dispatch(actions.changeRightBtnName(rightBtn));
			this.props.dispatch(actions.changeLeftBtnName(leftBtn));
			this.props.dispatch(actions.changeBtnAddr(rightBtnAddr, leftBtnAddr));
			this.props.dispatch(actions.changeId(id));
		} else {
			title = 'Quick Story',
			photoArea = 'Click on Get Random Photo button to begin!',
			rightBtn = 'Write',
			leftBtn = 'Back';

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.changePhotoArea(photoArea));
			this.props.dispatch(actions.changeRightBtnName(rightBtn));
			this.props.dispatch(actions.changeLeftBtnName(leftBtn));
		}
	}

	render() {
		return (
			<main className="storyContainer container-fluid">
				<MainTitle title={this.props.title} />
				<section className="storyAreaSection">
					<PhotoAreaContainer photo={this.props.photo} photoArea={this.props.photoArea} />
					{this.props.children}
					<ButtonArea photoBtn={this.props.photoBtn} leftBtn={this.props.leftBtn} leftBtnAddr={this.props.leftBtnAddr} rightBtn={this.props.rightBtn} rightBtnAddr={this.props.rightBtnAddr}
					 handleWriteClick={this.props.handleWriteClick} handleLeftClick={this.props.handleLeftClick} handleMiddleClick={this.props.handleMiddleClick} title={this.props.title}
					 photoArea={this.props.photoArea} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	title: state.syncReducer.title,
	leftBtn: state.syncReducer.leftBtn,
	leftBtnAddr: state.syncReducer.leftBtnAddr,
	photoBtn: state.syncReducer.photoBtn,
	rightBtn: state.syncReducer.rightBtn,
	rightBtnAddr: state.syncReducer.rightBtnAddr,
	photoArea: state.syncReducer.photoArea,
	photo: state.crudReducer.photo,
	id: state.syncReducer.id,
});

export default connect(mapStateToProps)(StoryContainer);
