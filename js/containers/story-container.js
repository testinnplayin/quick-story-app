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
		let showInitTextCont = this.props.showInitTextCont;
		const	stuff = this.props.stuff;

		if (showInitTextCont) {
			showInitTextCont = false;
			this.props.dispatch(actions.toggleShowInitTextCont(showInitTextCont))
		}

		if (stuff.title === 'Quick Story' && stuff.photoArea === 'Click on Get Random Photo button to begin!') {
			stuff.title = 'Write A Story';
			stuff.photoArea = 'Click on Write to begin writing or click on Get New Photo to get a new random photo';

			this.props.dispatch(actions.changeStuff(stuff));
		} else if (title === 'List of Stories' && photoArea === 'Click on a story below to edit or delete it') {
			let pathArr = this.props.location.pathname.split('/');

			stuff.id = pathArr[2];
			stuff.title = 'Your Story',
			stuff.photoArea = 'Click on Edit to edit your story, Delete to delete it or get a new random photo!',
			stuff.rightBtn = 'Edit',
			stuff.leftBtn = 'Delete',
			stuff.rightBtnAddr = `/story/edit/${stuff.id}`,
			stuff.leftBtnAddr = `/story/delete/${stuff.id}`;

			this.props.dispatch(actions.changeStuff(stuff));
		} else {
			stuff.leftBtn = 'Back',
			stuff.photoArea = 'Click on Get Random Photo button to begin!',
			stuff.rightBtn = 'Write',
			stuff.title = 'Quick Story';

			this.props.dispatch(actions.changeStuff(stuff));
		}
	}

	render() {
		return (
			<main className="storyContainer container-fluid">
				<MainTitle title={this.props.title} />
				<section className="storyAreaSection">
					<PhotoAreaContainer
						photo={this.props.photo}
						photoArea={this.props.photoArea}
						showInitTextCont={this.props.showInitTextCont} />
					{this.props.children}
					<ButtonArea
						{...this.props}
						handleLeftClick={this.props.handleLeftClick}
						handleMiddleClick={this.props.handleMiddleClick}
						handleWriteClick={this.props.handleWriteClick} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	id: state.syncReducer.stuff.id,
	leftBtn: state.syncReducer.stuff.leftBtn,
	leftBtnAddr: state.syncReducer.stuff.leftBtnAddr,
	photo: state.crudReducer.photo,
	photoArea: state.syncReducer.stuff.photoArea,
	photoBtn: state.syncReducer.stuff.photoBtn,
	rightBtn: state.syncReducer.stuff.rightBtn,
	rightBtnAddr: state.syncReducer.stuff.rightBtnAddr,
	showInitTextCont: state.toggleReducer.showInitTextCont,
	showTextAreaForm : state.toggleReducer.showTextAreaForm,
	showWriteButton : state.toggleReducer.showWriteButton,
	stuff : state.syncReducer.stuff,
	submitBtnName : state.syncReducer.stuff.submitBtnName,
	title: state.syncReducer.stuff.title
});

export default connect(mapStateToProps)(StoryContainer);
