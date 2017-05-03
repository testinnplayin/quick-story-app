'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap'

export class InitTextAreaContainer extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="initTextAreaContainer">
				<Button
					href='#/story'
					className="initPhotoBtn">
					{this.props.photoBtn}
				</Button>
			</div>
		);
	}
};

export default connect()(InitTextAreaContainer);
