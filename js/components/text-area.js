'use strict';

import React from 'react';
import {connect} from 'react-redux'

export class TextArea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="textArea"><p>Puppies</p></div>
		);	
	}
	
};

export default connect()(TextArea);