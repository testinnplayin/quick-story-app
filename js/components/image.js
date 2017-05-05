'use strict';

import React from 'react';
import {connect} from 'react-redux';

import InitTextAreaContainer from '../containers/init-text-area-container';
import TextAreaContainer from '../containers/text-area-container';

export class ImageContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const imageStyles = {
			width : '100%',
			height : '100%',
			backgroundImage : `url('${this.props.photo}')`,
			backgroundSize : "cover",
			backgroundColor : '#1e1e1e',
			backgroundPosition : 'center',
			backgroundAttachment : 'fixed',
			overflow : 'hidden'
		};

		if (this.props.showInitTextCont) {
			return (
				<div className="image" style={imageStyles}>
					<InitTextAreaContainer
						photoBtn={this.props.photoBtn} />
				</div>
			);
		} else {
			return (
				<div className="image" style={imageStyles}>
					<TextAreaContainer />
				</div>
			);
		}
	}
};

export default connect()(ImageContainer);
