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

	componentDidMount() {
		let buttonNames = this.props.buttonNames,
			buttonName = buttonNames[0];

		console.log(buttonName);
	}

	render() {
		return (
			<main className="generalContainer">
				<MainTitle title={this.props.title} />
				<section className="generalArea">
					<InitPhotoAreaContainer photoArea={this.props.photoArea} />
					<InitTextAreaContainer buttonName={this.buttonName} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	title: state.title,
	buttonNames: state.buttonNames,
	photoArea: state.photoArea
});

export default connect(mapStateToProps)(GeneralContainer);