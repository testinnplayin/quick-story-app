'use strict';

import React from 'react';
import {connect} from 'react-redux';

import DeleteAreaButtons from '../components/delete-area-buttons';

import * as actions from '../actions/index';

export class DeleteAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let leftBtnAddr = this.props.leftBtnAddr,
			rightBtnAddr = this.props.rightBtnAddr,
			id = this.props.id;

		leftBtnAddr = `/story/${id}`,
		rightBtnAddr = `/story/${id}`;

		this.props.dispatch(actions.changeBtnAddr(rightBtnAddr, leftBtnAddr));
	}

	render() {
		return (
			<div className="deleteAreaContainer">
				<p>Please click below:</p>
				<DeleteAreaButtons
					{...this.props} />
			</div>
		);
	}
};

const mapStateToProps = (state, props) => ({
	leftBtnAddr: state.syncReducer.leftBtnAddr,
	rightBtnAddr: state.syncReducer.rightBtnAddr,
	id: state.crudReducer.story.id,
	title: state.syncReducer.title,
	photoArea: state.syncReducer.photoArea,
	leftBtn: state.syncReducer.leftBtn,
	rightBtn: state.syncReducer.ightBtnAddr
});

export default connect(mapStateToProps)(DeleteAreaContainer);
