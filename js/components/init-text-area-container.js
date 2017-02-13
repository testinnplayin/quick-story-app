'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class InitTextAreaContainer extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="initTextAreaContainer">
				<TextForm buttonName={this.props.buttonName} getPhoto={this.props.getPhoto} />
			</div>
		);
	}
};

export default connect()(InitTextAreaContainer);