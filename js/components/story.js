'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class Story extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="story">
				<a>Back</a>
				<form>
					<input type="textarea" placeholder="Click here to start writing your story" />
				</form>
				<button type="button">Get New Photo</button>
				<button type="submit">Save Story</button>
			</div>
		);
	}
};