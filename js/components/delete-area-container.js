'use strict';

import React from 'react';
import {connect} from 'react-redux';

import DeleteAreaButtons from './delete-area-buttons';

export class DeleteAreaContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		<div className="deleteAreaContainer">
			<DeleteAreaButtons />
		</div>;
	}
};

const mapStateToProps = (state, props) => ({
	id: state.id
});

export default connect(mapStateToProps)(DeleteAreaContainer);