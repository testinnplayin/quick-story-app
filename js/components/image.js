'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class Image extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const imageStyles = {
			width : '100%',
			height : '100%',
			backgroundImage : `url('${this.props.photo}')`,
			backgroundSize : "cover",
			backgroundColor : '#444',
			backgroundPosition : 'center',
			backgroundAttachment : 'fixed',
			overflow : 'hidden'
		};

		return (
			<div className="image" style={imageStyles}>

			</div>
		);
	}
};

export default connect()(Image);
