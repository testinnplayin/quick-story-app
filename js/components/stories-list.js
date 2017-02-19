'use strict';

import React from 'react';
import {Link} from 'react-router';

export default function StoriesList(props) {
	const stories = props.stories;

	const story = stories.map((content, i) => {
		return (
			<li><Link to={'/story/' + props.stories[i]}><img src={props.stories.photo} />Title: {props.stories.title[i]} Author: {props.stories.author[i]}</Link></li>
		);
	});
};