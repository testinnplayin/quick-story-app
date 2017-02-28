'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/index';

export class DeleteAreaButtons extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}

	componentDidMount() {
		let leftBtnAddr = this.props.leftBtnAddr,
			rightBtnAddr = this.props.rightBtnAddr,
			id = this.props.id;

		leftBtnAddr = `story/${id}`,
		rightBtnAddr = `story/${id}`;

		this.props.dispatch(actions.changeBtnAddr(rightBtnAddr, leftBtnAddr));
	}

	handleDeleteClick(e) {
		let message = '',
			id = this.props.id;

		console.log('stuff');
	}

	render() {
		return (
			<ul className="deleteAreaButtons">
				<li className="back-btn"><Link to={this.props.leftBtnAddr}>{this.props.leftBtn}</Link></li>
				<button className="delete-btn" onClick={this.handleDeleteClick}>{this.props.rightBtn}</button>
			</ul>
		);
	}
};

export default connect()(DeleteAreaButtons);