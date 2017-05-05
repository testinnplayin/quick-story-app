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
					photo={this.props.photo}
					photoArea={this.props.photoArea}
					photoBtn={this.props.photoBtn}
					showInitTextCont={this.props.showInitTextCont} />
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	title: state.syncReducer.title,
	buttonNames: state.buttonNames,
	photo : state.crudReducer.photo,
	photoArea: state.syncReducer.photoArea,
	photoBtn: state.syncReducer.photoBtn,
	showInitTextCont: state.syncReducer.showInitTextCont
});

export default connect(mapStateToProps)(GeneralContainer);
