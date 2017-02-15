'use strict';

import React from 'react';
import {connect} from 'react-redux'

import TextArea from './text-area';

export class TextAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="textAreaContainer">
				<TextArea />
			</div>
		);	
	}
	
};

export default connect()(TextAreaContainer);