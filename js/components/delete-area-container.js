'use strict';

import React from 'react';
import {connect} from 'react-redux';

import DeleteAreaButtons from './delete-area-buttons';

import * as actions from '../actions/index';

export class DeleteAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let leftBtnAddr = this.props.leftBtnAddr,
			rightBtnAddr = this.props.rightBtnAddr,
			id = this.props.id;

		leftBtnAddr = `story/${id}`,
		rightBtnAddr = `story/${id}`;

		this.props.dispatch(actions.changeBtnAddr(rightBtnAddr, leftBtnAddr));
	}

	render() {
		return (
			<div className="deleteAreaContainer">
				<p>Please click below:</p>
				<DeleteAreaButtons leftBtnAddr={this.props.leftBtnAddr} rightBtnAddr={this.props.rightBtnAddr} id={this.props.id} title={this.props.title}
				 photoArea={this.props.photoArea} leftBtn={this.props.leftBtn} rightBtn={this.rightBtn} />
			</div>
		);
	}
};

const mapStateToProps = (state, props) => ({
	leftBtnAddr: state.leftBtnAddr,
	rightBtnAddr: state.rightBtnAddr,
	id: state.id,
	title: state.title,
	photoArea: state.photoArea,
	leftBtn: state.leftBtn,
	rightBtn: state.rightBtnAddr
});

export default connect(mapStateToProps)(DeleteAreaContainer);