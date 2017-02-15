'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class TextArea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="textArea">
				<input type="textarea" />
			</form>
		);
	}
};

export default connect()(TextArea);