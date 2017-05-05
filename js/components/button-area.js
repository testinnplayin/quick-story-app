'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {ButtonToolbar} from 'react-bootstrap';

import * as actions from '../actions/index';

export class ButtonArea extends React.Component {
	constructor(props) {
		super(props);

		this.handleWriteClick = this.handleWriteClick.bind(this);
		this.handleLeftClick = this.handleLeftClick.bind(this);
		this.handleMiddleClick = this.handleMiddleClick.bind(this);
	}

	handleWriteClick(e) {
		let rightBtn = this.props.rightBtn,
			leftBtn = this.props.leftBtn,
			title = this.props.title,
			photoArea = this.props.photoArea,
			showInitTextCont = this.props.showInitTextCont;

		if (rightBtn === 'Write' || rightBtn === 'Edit') {
			rightBtn = '',
			showInitTextCont = false;
			this.props.dispatch(actions.changeRightBtnName(rightBtn));
			this.props.dispatch(actions.toggleShowInitTextCont(showInitTextCont));
		}

		if (rightBtn === '' && title === 'Your Story') {
			var leftBtnAddr = this.props.leftBtnAddr,
				rightBtnAddr = this.props.rightBtnAddr,
				leftBtnAddrArr = leftBtnAddr.split('/'),
				id = leftBtnAddrArr[3];

			title = 'Edit Your Story',
			photoArea = 'Click Save if you wish to keep your changes',
			leftBtn = 'Back';
			leftBtnAddr = `story/${id}`;

			this.props.dispatch(actions.changeLeftBtnName(leftBtn));
			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.changePhotoArea(photoArea));
			this.props.dispatch(actions.changeBtnAddr(rightBtnAddr, leftBtnAddr))
		}


	}

	handleMiddleClick(e) {
		let rightBtn = this.props.rightBtn;

		this.props.dispatch(actions.getPhoto());

		if (rightBtn === '') {
			rightBtn = 'Write';
			this.props.dispatch(actions.changeRightBtnName(rightBtn));
		}

	}

	handleLeftClick(e) {
		let title = this.props.title,
			rightBtn = this.props.rightBtn,
			photoArea = this.props.photoArea;

		if (title === 'Write A Story') {
			title = 'Quick Story',
			photoArea = 'Click on Get Random Photo button to begin!';

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.changePhotoArea(photoArea));
		} else if (title === 'Edit Your Story') {
			title = 'Your Story',
			photoArea = 'Click on Edit to edit your story, Delete to delete it or get a new random photo!';

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.changePhotoArea(photoArea));
		} else if (title = 'Your Story') {
			let leftBtn = this.props.leftBtn,
				rightBtn = this.props.rightBtn;

			title = 'Delete Your Story',
			photoArea = '',
			leftBtn = '',
			rightBtn = '';

			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.changePhotoArea(photoArea));
			this.props.dispatch(actions.changeLeftBtnName(leftBtn));
			this.props.dispatch(actions.changeRightBtnName(rightBtn));
		}
	}

	render() {
		return (
			<section className="buttonArea">
				<ButtonToolbar>
					<Link
						id="leftBtnButtonArea"
						className="leftBtn btn btn-default"
						to={this.props.leftBtnAddr}
						onClick={this.handleLeftClick}>
						{this.props.leftBtn}
					</Link>
					<Link
						id="middleBtnButtonArea"
						className="middleBtn btn btn-default"
						to='/story'
						onClick={this.handleMiddleClick}>
						{this.props.photoBtn}
					</Link>
					<Link
						id="rightBtnButtonArea"
						className="rightBtn btn btn-default"
						to={this.props.rightBtnAddr}
						onClick={this.handleWriteClick}>
						{this.props.rightBtn}
					</Link>
				</ButtonToolbar>
			</section>
		);
	}
};

export default connect()(ButtonArea);
