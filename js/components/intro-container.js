'use strict';

import React from 'react';
import {connect} from 'react-redux';

import PhotoAreaContainer from './photo-area-container';
import TextAreaContainer from './text-area-container';

export class IntroContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="introContainer">
				<PhotoAreaContainer />
				<TextAreaContainer buttonName={this.props.buttonName} />
			</section>
		);
	}
};

export default connect()(IntroContainer);