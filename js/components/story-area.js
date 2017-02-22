'use strict';

import React from 'react';
import {connect} from 'react-redux';



export class StoryArea extends React.Component {
	constructor(props) {
		super(props);

		console.log(this.props);
	}


	render() {
		return (
			<div className="storyArea">
				<h2 className="userTitle"><strong>Title: </strong> {this.props.userTitle}</h2>
				<p className="userStory"><strong>Story: </strong>{this.props.userStory}</p>
				<p><strong>By: </strong>{this.props.newAuthor}</p>
			</div>
		);
	}
};

export default connect()(StoryArea);