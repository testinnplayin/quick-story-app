'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class StoryArea extends React.Component {
	constructor(props) {
		super(props);

		console.log(this.props);
	}

					// <p><strong>By: </strong>{this.props.author}</p>


	render() {
		return (
			<div className="storyArea">
				<h2 className="userTitle"><strong>Title: </strong> {this.props.userTitle}</h2>
				<p className="userStory"><strong>Story: </strong>{this.props.userStory}</p>
			</div>
		);
	}
};

export default connect()(StoryArea);