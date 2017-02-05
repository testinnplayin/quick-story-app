'use strict';

import React from 'react';
import {Link} from 'react-router';

import Navbar from './navbar';

export default class MainContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="mainContainer">
				<Navbar />
			</div>
		);
	}
};