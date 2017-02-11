'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from './main-title';
import PhotoAreaContainer from './photo-area-container';
import TextAreaContainer from './text-area-container';

export class GeneralContainer extends React.Component {
	constructor(props) {
		super(props);

		console.log(props);
	}

	render() {
		return (
			<main className="generalContainer">
				<MainTitle title={this.props.title} />
				<section className="generalArea">
					<PhotoAreaContainer photoArea={this.props.photoArea} />
					<TextAreaContainer buttonName={this.props.buttonName} />
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