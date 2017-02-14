'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

export class InitTextAreaContainer extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="initTextAreaContainer">
				<Link to='/story'>{this.props.photoBtn}</Link>
			</div>
		);
	}
};

export default connect()(InitTextAreaContainer);