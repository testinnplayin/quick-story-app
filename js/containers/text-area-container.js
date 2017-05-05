'use strict';

import React from 'react';
import {connect} from 'react-redux'

import TextArea from '../components/text-area';

export class TextAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.showTextAreaForm) {
			return (
				<div className="textAreaContainer">
					<TextArea
						{...this.props} />
				</div>
			);
		} else {
			return (
				<div className="textAreaContainer">

				</div>
			);
		}
	}

};

const mapStateToProps = (state, props) => ({
	author: state.syncReducer.author,
	id: state.syncReducer.id,
	newAuthor: state.syncReducer.newAuthor,
	photo: state.crudReducer.photo,
	showTextAreaForm: state.toggleReducer.showTextAreaForm,
	submitBtnName: state.syncReducer.submitBtnName,
	userStory: state.syncReducer.userStory,
	userTitle: state.syncReducer.userTitle
});

export default connect(mapStateToProps)(TextAreaContainer);
