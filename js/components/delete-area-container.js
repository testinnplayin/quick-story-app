'use strict';

import React from 'react';
import {connect} from 'react-redux';

import DeleteAreaButtons from './delete-area-buttons';

export class DeleteAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="deleteAreaContainer">
				<p>Please click below:</p>
				<DeleteAreaButtons leftBtn={this.props.leftBtn} leftBtnAddr={this.props.leftBtnAddr} rightBtn={this.props.rightBtn} rightBtnAddr={this.props.rightBtnAddr} />
			</div>
		);
	}
};

const mapStateToProps = (state, props) => ({
	leftBtnAddr: state.leftBtnAddr,
	rightBtnAddr: state.rightBtnAddr,
	id: state.id
});

export default connect(mapStateToProps)(DeleteAreaContainer);