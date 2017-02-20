'use strict';

import React from 'react';
import {connect} from 'react-redux'

import TextArea from './text-area';

export class TextAreaContainer extends React.Component {
	constructor(props) {
		super(props);

		console.log(this.props.author);
	}

	render() {
		return (
			<div className="textAreaContainer">
				<TextArea submitBtnName={this.props.submitBtnName} getTitleInput={this.props.getTitleInput} getStoryInput={this.props.getStoryInput}
				 getUserName={this.props.getUserName} saveStory={this.props.saveStory} userTitle={this.props.userTitle} userStory={this.props.userStory}
				 author={this.props.author} photo={this.props.photo} />
			</div>
		);	
	}
	
};

const mapStateToProps = (state, props) => ({
	submitBtnName: state.submitBtnName,
	userTitle: state.userTitle,
	userStory: state.userStory,
	author: state.author,
	photo: state.photo
});

export default connect(mapStateToProps)(TextAreaContainer);