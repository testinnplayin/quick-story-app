'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class ButtonArea extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<section className="buttonArea">
				<ul>
					<li><Link to='/'>{this.props.leftBtn}</Link></li>
					<li><Link to='/story'>{this.props.photoBtn}</Link></li>
					<li><Link to='/story/new'>{this.props.rightBtn}</Link></li>
				</ul>
			</section>
		);
	}
};

export default connect()(ButtonArea);