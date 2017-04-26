'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/index';

export class StoriesList extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const stories = this.props.stories;

		let story = stories.map((content, i) => {
			return (
				<li key={i}><Link to={`/story/${content.id}`} value={content.id}><img src={content.photo} />Title: {content.userTitle} Author: {content.author}</Link></li>
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
