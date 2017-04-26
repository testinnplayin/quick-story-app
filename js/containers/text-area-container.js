'use strict';

import React from 'react';
import {connect} from 'react-redux'

import TextArea from '../components/text-area';

export class TextAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="textAreaContainer">
				<TextArea submitBtnName={this.props.submitBtnName} getTitleInput={this.props.getTitleInput} getStoryInput={this.props.getStoryInput}
				 getUserName={this.props.getUserName} saveStory={this.props.saveStory} userTitle={this.props.userTitle} userStory={this.props.userStory}
				 author={this.props.author} photo={this.props.photo} newAuthor={this.props.newAuthor} id={this.props.id} />
			</div>
		);
	}

};

const mapStateToProps = (state, props) => ({
	submitBtnName: state.submitBtnName,
	userTitle: state.userTitle,
	userStory: state.userStory,
	author: state.author,
	photo: state.photo,
	newAuthor: state.newAuthor,
	id: state.id
});

export default connect(mapStateToProps)(TextAreaContainer);
