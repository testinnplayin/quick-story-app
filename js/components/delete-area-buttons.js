'use strict';

import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

import * as actions from '../actions/index';

export class DeleteAreaButtons extends React.Component {
	constructor(props) {
		super(props);

		this.handleCancelClick = this.handleCancelClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}

	handleCancelClick(e) {
		let title = this.props.title,
			photoArea = this.props.photoArea,
			leftBtn = this.props.leftBtn,
			rightBtn = this.props.rightBtn,
			leftBtnAddr = this.props.leftBtnAddr,
			rightBtnAddr = this.props.rightBtnAddr,
			id = this.props.id;

		title = 'Your Story',
		photoArea = 'Click on Edit to edit your story, Delete to delete it or get a new random photo!',
		leftBtn = 'Delete',
		rightBtn = 'Edit',
		leftBtnAddr = `story/delete/${id}`,
		rightBtnAddr = `story/edit/${id}`;

		this.props.dispatch(actions.changeTitle(title));
		this.props.dispatch(actions.changePhotoArea(photoArea));
		this.props.dispatch(actions.changeLeftBtnName(leftBtn));
		this.props.dispatch(actions.changeRightBtnName(rightBtn));
		this.props.dispatch(actions.changeBtnAddr(rightBtnAddr, leftBtnAddr));
		this.props.dispatch(actions.changeId(id));
	}

	handleDeleteClick(e) {
		let message = '',
			id = this.props.id;

		console.log('stuff');
	}

	render() {
		return (
			<ul className="deleteAreaButtons">
				<li
					className="back-btn">
					<Button
						id="deleteAreaCancelBtn"
						to={this.props.leftBtnAddr}
						onClick={this.handleCancelClick}>
						Cancel
					</Button>
				</li>
				<Button className="delete-btn" onClick={this.handleDeleteClick}>Delete</Button>
			</ul>
		);
	}
};

export default connect()(DeleteAreaButtons);
