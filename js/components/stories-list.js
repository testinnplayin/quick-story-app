'use strict';

import React from 'react';
import {Link} from 'react-router';

export default function StoriesList(props) {
	console.log(props.stories);
	const stories = props.stories;

	const story = stories.map((content, i) => {
		return (
			<li key={i}><Link to={'/story/' + content.id} value={content.id}><img src={content.photo} />Title: {content.userTitle} Author: {content.author}</Link></li>
		);
	});

	return (
		<ul className="storiesList">
			{story}
		</ul>
	);
};