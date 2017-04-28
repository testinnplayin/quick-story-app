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
				<TextArea
					{...this.props} />
			</div>
		);
	}

};

const mapStateToProps = (state, props) => ({
	submitBtnName: state.syncReducer.submitBtnName,
	userTitle: state.syncReducer.userTitle,
	userStory: state.syncReducer.userStory,
	author: state.syncReducer.author,
	photo: state.crudReducer.photo,
	newAuthor: state.syncReducer.newAuthor,
	id: state.syncReducer.id
});

export default connect(mapStateToProps)(TextAreaContainer);
