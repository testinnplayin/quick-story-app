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
		e.preventDefault();
		let stuff = {
				leftBtn : this.props.leftBtn,
				photoArea : this.props.photoArea,
				rightBtn : this.props.rightBtn,
				title : this.props.title
			},
			showInitTextCont = this.props.showInitTextCont,
			showTextAreaForm = this.props.showTextAreaForm;

		if (stuff.rightBtn === 'Write' || stuff.rightBtn === 'Edit') {
			stuff.rightBtn = '';
			showInitTextCont = false;
			showTextAreaForm = true;
			console.log(stuff);
			this.props.dispatch(actions.changeStuff(stuff));
			this.props.dispatch(actions.toggleShowInitTextCont(showInitTextCont));
			this.props.dispatch(actions.toggleShowTextAreaForm(showTextAreaForm));
		}

		if (stuff.rightBtn === '' && stuff.title === 'Your Story') {
			let leftBtnAddr = this.props.leftBtnAddr,
				leftBtnAddrArr = leftBtnAddr.split('/'),
				id = leftBtnAddrArr[3],
				stuff = {
					id : id,
					leftBtnAddr : leftBtnAddr,
					rightBtnAddr : this.props.rightBtnAddr
				};

			stuff.title = 'Edit Your Story',
			stuff.photoArea = 'Click Save if you wish to keep your changes',
			stuff.leftBtn = 'Back';
			stuff.leftBtnAddr = `story/${id}`;

			this.props.dispatch(actions.changeStuff(stuff));
		}
	}

	handleMiddleClick() {
		let stuff = {
			rightBtn : this.props.rightBtn
		};

		this.props.dispatch(actions.getPhoto());

		if (stuff.rightBtn === '') {
			stuff.rightBtn = 'Write';
			this.props.dispatch(actions.changeStuff(stuff));
		}

	}

	handleLeftClick(e) {
		e.preventDefault();

		let stuff = {
			photoArea : this.props.photoArea,
			rightBtn : this.props.rightBtn,
			title : this.props.title
		};

		if (stuff.title === 'Write A Story') {
			stuff.title = 'Quick Story',
			stuff.photoArea = 'Click on Get Random Photo button to begin!';

			this.props.dispatch(actions.changeStuff(stuff));
		} else if (stuff.title === 'Edit Your Story') {
			stuff.title = 'Your Story',
			stuff.photoArea = 'Click on Edit to edit your story, Delete to delete it or get a new random photo!';

			this.props.dispatch(actions.changeStuff(stuff));
		} else if (stuff.title = 'Your Story') {
			stuff.leftBtn = this.props.leftBtn,
			stuff.rightBtn = this.props.rightBtn;

			stuff.title = 'Delete Your Story',
			stuff.photoArea = '',
			stuff.leftBtn = '',
			stuff.rightBtn = '';

			this.props.dispatch(actions.changeStuff(stuff));
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
}

export default connect()(ButtonArea);
