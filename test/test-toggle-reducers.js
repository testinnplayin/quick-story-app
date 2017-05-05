'use strict';

import React from 'react'
import chai from 'chai';

const should = chai.should();

import toggleReducer from '../js/reducers/toggle-reducers';
import * as actions from '../js/actions/index';

describe('toggleReducer', function() {
  it('should return the initial state if undefined', function() {
    const fakeState = {
				showInitTextCont : true
			},
			noAction = { type : 'unknown' };

		toggleReducer(fakeState, noAction).should.eql({
			showInitTextCont : true
		});
  });

  it('should toggle photoIsLoading when action is togglePhotoLoading', function() {
    const fakeState = {
      photoIsLoading : true
    },
      togglePhotoLoading = {
        type : actions.TOGGLE_PHOTO_LOADING,
        photoIsLoading : true
      };
    toggleReducer(fakeState, togglePhotoLoading).should.eql({
      photoIsLoading : false
    });
  });

  it('should toggle showInitTextCont when action is toggleShowInitTextCont', function() {
    const fakeState = {
      showInitTextCont : true
    },
      toggleShowInitTextCont = {
        type : actions.TOGGLE_SHOW_INIT_TEXT_CONT,
        showInitTextCont : true
      };
    toggleReducer(fakeState, toggleShowInitTextCont).should.eql({
      showInitTextCont : true
    });
  });

  it('should toggle showTextAreaForm when action is toggleShowTextAreaForm', function() {
    const fakeState = {
      showTextAreaForm : false
    },
      toggleShowTextAreaForm = {
        type : actions.TOGGLE_SHOW_TEXT_AREA_FORM,
        showTextAreaForm : true
      };
    toggleReducer(fakeState, toggleShowTextAreaForm).should.eql({
      showTextAreaForm : true
    });
  });

  it('should toggle showStoryArea when action is toggleShowStoryArea', function() {
    const fakeState = {
      showStoryArea : false
    },
      toggleShowStoryArea = {
        type : actions.TOGGLE_SHOW_STORY_AREA,
        showStoryArea : false
      };
    toggleReducer(fakeState, toggleShowStoryArea).should.eql({
      showStoryArea : false
    });
  });
});
