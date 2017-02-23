'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/index';

export class StoriesList extends React.Component {
	constructor(props) {
		super(props);

		this.handleLinkClick = this.handleLinkClick.bind(this);
	}


	handleLinkClick() {
		let title = this.props.title,
			photoArea = this.props.photoArea;

		console.log('triggered');

		title = 'Your Story',
		photoArea = 'Click on Edit to edit your story, Delete to delete it or get a new random photo!';

		this.props.dispatch(actions.changeTitle(title));
		this.props.dispatch(actions.changePhotoArea(photoArea));
	}

	render() {
		const stories = this.props.stories;

		let story = stories.map((content, i) => {
			return (
				<li key={i}><Link to={'/story/' + content.id} value={content.id} onClick={this.handleLinkClick}><img src={content.photo} />Title: {content.userTitle} Author: {content.author}</Link></li>
			);
		});
		
		return (
			<ul className="storiesList">
				{story}
			</ul>
		);
	}

	
};

export default connect()(StoriesList);