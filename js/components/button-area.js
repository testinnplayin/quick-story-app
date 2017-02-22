'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/index';

export class ButtonArea extends React.Component {
	constructor(props) {
		super(props);

		this.handleWriteClick = this.handleWriteClick.bind(this);
		this.handleLeftClick = this.handleLeftClick.bind(this);
		this.handleMiddleClick = this.handleMiddleClick.bind(this);
	}

	handleWriteClick(e) {
		let rightBtn = this.props.rightBtn;

		if (rightBtn === 'Write' && this.props.location.pathname === 'localhost:8080/story') {
			rightBtn = '';
			this.props.dispatch(actions.changeRightBtnName(rightBtn));
		}
	}

	handleMiddleClick(e) {
		let rightBtn = this.props.rightBtn;
		console.log('handleMiddleClick');

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

		if (rightBtn === 'Write') {
			this.props.dispatch(actions.changeTitle(title));
			this.props.dispatch(actions.changePhotoArea(photoArea));
		}
	}

	render() {
		return (
			<section className="buttonArea">
				<ul className="nav nav-pills btn-group btn-group-justified" role="group">
					<li role="presentation"><Link className="btn" to={this.props.leftBtnAddr} onClick={this.handleLeftClick}>{this.props.leftBtn}</Link></li>
					<li role="presentation"><Link className="btn" to='/story' onClick={this.handleMiddleClick}>{this.props.photoBtn}</Link></li>
					<li role="presentation"><Link className="btn" to={this.props.rightBtnAddr} onClick={this.handleWriteClick} >{this.props.rightBtn}</Link></li>
				</ul>
			</section>
		);
	}
};

export default connect()(ButtonArea);