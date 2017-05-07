'use strict';

import update from 'immutability-helper';

import * as types from '../actions/index';

const initialState = {
  photoIsLoading : true,
  showInitTextCont : true,
  showStoryArea : false,
  showTextAreaForm : false,
  showWriteButton : true
};

export default function toggleReducer(state=initialState, action) {
    switch(action.type) {
      case types.TOGGLE_PHOTO_LOADING:
  			const newState_1 = update(state, {
  				photoIsLoading : {
  					$set : !(action.photoIsLoading)
  				}
  			});
  			return newState_1;
  		case types.TOGGLE_SHOW_INIT_TEXT_CONT:
  			const newState_2 = update(state, {
  				showInitTextCont : {
  					$set : action.showInitTextCont
  				}
  			});
  			return newState_2;
      case types.TOGGLE_SHOW_TEXT_AREA_FORM:
        const newState_3 = update(state, {
          showTextAreaForm : {
            $set : action.showTextAreaForm
          }
        });
        return newState_3;
      case types.TOGGLE_SHOW_STORY_AREA:
        const newState_4 = update(state, {
          showStoryArea : {
            $set : action.showStoryArea
          }
        });
        return newState_4;
      case types.TOGGLE_SHOW_WRITE_BUTTON:
        const newState_5 = update(state, {
          showWriteButton : {
            $set : action.showWriteButton
          }
        });
        return newState_5;
      default:
        return state;
    }
}
