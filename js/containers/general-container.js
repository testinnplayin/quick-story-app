'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from '../components/main-title';
import PhotoAreaContainer from './photo-area-container';

export class GeneralContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main className="generalContainer container-fluid">
				<MainTitle title={this.props.title} />
				<PhotoAreaContainer
					{...this.props} />
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	photo : state.crudReducer.photo,
	photoArea: state.syncReducer.stuff.photoArea,
	photoBtn: state.syncReducer.stuff.photoBtn,
	showInitTextCont: state.toggleReducer.showInitTextCont,
	title: state.syncReducer.stuff.title,
});

export default connect(mapStateToProps)(GeneralContainer);
