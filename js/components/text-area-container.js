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
				<TextArea submitBtnName={this.props.submitBtnName} getTitleInput={this.props.getTitleInput} getStoryInput={this.props.getStoryInput} getUserName={this.props.getUserName} />
			</div>
		);	
	}
	
};

const mapStateToProps = (state, props) => ({
	submitBtnName: state.submitBtnName,
	userTitle: state.userTitle,
	userStory: state.userStory,
	author: {
		firstName: state.firstName,
		lastName: state.lastName
	}
});

export default connect(mapStateToProps)(TextAreaContainer);