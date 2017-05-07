'use strict';

import React from 'react';
import {connect} from 'react-redux';

import MainTitle from '../components/main-title';
import StoriesList from '../components/stories-list';

import * as actions from '../actions/index';

export class StoriesContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let stuff = {
			id : this.props.id,
			leftBtn : this.props.leftBtn,
			leftBtnAddr : this.props.leftBtnAddr,
			photoArea : this.props.photoArea,
			photoBtn : this.props.photoBtn,
			rightBtn : this.props.rightBtn,
			rightBtnAddr : this.props.rightBtnAddr,
			submitBtnName : this.props.submitBtnName,
			title : this.props.title
		};

		stuff.title = 'List of Stories';
		stuff.photoArea = 'Click on a story below to edit or delete it';

		this.props.dispatch(actions.changeStuff(stuff));
		this.props.dispatch(actions.fetchStories());
	}

	render() {
		return (
			<main className="storiesContainer">
				<MainTitle title={this.props.stuff.title} />
				<section className="storyListArea">
					<p>{this.props.stuff.photoArea}</p>
					<StoriesList
						stories={this.props.stories}
						title={this.props.stuff.title}
						photoArea={this.props.stuff.photoArea} />
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state, props) => ({
	stories: state.crudReducer.stories,
	stuff : state.syncReducer.stuff
});

export default connect(mapStateToProps)(StoriesContainer);
