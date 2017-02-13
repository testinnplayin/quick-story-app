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
			<main className="generalContainer">
				<MainTitle title={this.props.title} />
				<section className="generalArea">
					<InitPhotoAreaContainer photoArea={this.props.photoArea} />
					<InitTextAreaContainer buttonName={this.props.buttonName} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	title: state.title,
	buttonName: state.buttonName,
	photoArea: state.photoArea
});

export default connect(mapStateToProps)(GeneralContainer);