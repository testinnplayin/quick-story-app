'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Image from './image';

export class PhotoAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	
	// handleOnChangeEvent() {

	// }

	// <input type="textarea" onChange={handleOnChangeEvent} />
					// <button type="submit">Submit</button>

	render() {
		return (
			<section className="photoAreaContainer">
				<Image photo={this.props.photo}/>
			</section>
		);
	}
};

export default connect()(PhotoAreaContainer);