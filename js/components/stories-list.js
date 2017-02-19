'use strict';

import React from 'react';
import {Link} from 'react-router';

export default function StoriesList(props) {
	const stories = props.stories;

	// const story = stories.map((content, i) => {
	// 	return (
	// 		<li key={i}><Link to={'/story/' + props.stories.id[i]} value={props.stories.id[i]}><img src={props.stories[i].photo} />Title: {props.stories[i].title} Author: {props.stories[i].author}</Link></li>
	// 	);
	// });

	return (
		<ul className="storiesList"><p>puppies</p></ul>
	);
};