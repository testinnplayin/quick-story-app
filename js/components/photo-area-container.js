'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class PhotoAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.dispatch(actions.getPhoto());
	}

	// handleOnChangeEvent() {

	// }

	// <input type="textarea" onChange={handleOnChangeEvent} />
					// <button type="submit">Submit</button>

	render() {
		return (
			<section className="photoAreaContainer">
				
			</section>
		);
	}
};

export default connect()(PhotoAreaContainer);