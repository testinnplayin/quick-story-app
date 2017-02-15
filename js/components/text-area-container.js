'use strict';

import React from 'react';
import {connect} from 'react-redux'

export class TextAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="textAreaContainer"></div>
		);	
	}
	
};

export default connect()(TextAreaContainer);