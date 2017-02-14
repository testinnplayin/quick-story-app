'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class IntermedTextAreaCont extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="intermedTextAreaCont">
				<Link to='/'>{this.props.backBtn}</Link>
				<Link to='/story/new'>{this.props.photoBtn}</Link>
			</section>
		);
	}
};

export default connect()(IntermedTextAreaCont);