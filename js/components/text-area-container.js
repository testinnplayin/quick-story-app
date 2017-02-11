'use strict';

import React from 'react';
import {connect} from 'react-redux';

import TextForm from './text-form';

export class TextAreaContainer extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="textAreaContainer">
				<TextForm />
			</div>
		);
	}
};

export default connect()(TextAreaContainer);