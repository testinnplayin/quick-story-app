'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from './main-title';
import InitPhotoAreaContainer from './init-photo-area-container';
import InitTextAreaContainer from './init-text-area-container';

export class GeneralContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main className="generalContainer container-fluid">
				<MainTitle title={this.props.title} />
				<section className="generalArea">
					<InitPhotoAreaContainer photoArea={this.props.photoArea} />
					<InitTextAreaContainer photoBtn={this.props.photoBtn} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	title: state.title,
	buttonNames: state.buttonNames,
	photoArea: state.photoArea,
	photoBtn: state.photoBtn
});

export default connect(mapStateToProps)(GeneralContainer);