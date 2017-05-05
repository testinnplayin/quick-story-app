'use strict';

import update from 'immutability-helper';

import * as types from '../actions/index';

const initialState = {
  photoIsLoading : true,
  showInitTextCont : true,
  showTextAreaForm : false
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
      default:
        return state;
    }
}
