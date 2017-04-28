'use strict';

import update from 'immutability-helper';

import * as types from '../actions/index';

const initialState = {
  photo : '',
  stories : [],
  story : {
    title : '',
    photo : '',
    userStory : '',
    author : {
      firstName : '',
      lastName : ''
    },
    authorString : ''
  },
  storyMessage : ''
};

export default function crudReducer(state=initialState, action) {
  switch(action.type) {
    case types.FETCH_STORIES_SUCCESS:
			let storiesSucc = action.storiesSucc,
				storiesLng = storiesSucc.length;

			if (storiesLng < 1) {
				throw new Error('Couldn\'t find stories');
			}

			const newState_1 = update(state, {
				stories: {
					$set: storiesSucc
				}
			});
			return newState_1;
		case types.FETCH_STORIES_ERROR:
			const newState_2 = update(state, {
				storyMessage : action.storiesErr
			});
			return newState_2;
		case types.SAVE_STORY_SUCCESS:
			const newState_3 = update(state, {
				story: {
          title : {
            $set : action.storySucc.title
          },
          userStory : {
            $set : action.storySucc.userStory
          },
          authorString : {
            $set : action.storySucc.author
          },
          photo : {
            $set : action.storySucc.photo
          },
          id : {
            $set : action.storySucc.id
          }
				},
        storyMessage : 'Story saved with success'
			});
			return newState_3;
		case types.SAVE_STORY_ERROR:
			const newState_4 = update(state, {
				storyMessage: {
          $set : action.storyErr
        }
			});
			return newState_4;
		case types.FETCH_STORY_SUCCESS:
			let storySucc2 = action.storySucc,
				redoAuthor = storySucc2.author.split(', '),
				firstName = redoAuthor[1],
				lastName = redoAuthor[0];

			const newState_5 = update(state, {
        story : {
          title : action.storySucc.userTitle,
          photo : action.storySucc.user,
          userStory : action.storySucc.userStory,
          author : {
            firstName : {
              $set : firstName
            },
            lastName : {
              $set : lastName
            }
          }
        }
			});
			return newState_5;
		case types.FETCH_STORY_ERROR:
			const newState_6 = update(state, {
				storyMessage: {
					$set: action.storyErr
				}
			});
			return newState_6;
      case types.UPDATE_STORY_SUCCESS:
  			const newState_7 = update(state, {
          storyMessage : {
            $set : action.updateSucc
          }
        });
  			return newState_7;
  		case types.UPDATE_STORY_ERROR:
  			const newState_8 = update(state, {
  				storyMessage : {
            $set : action.updateErr
          }
  			});
  			return newState_8;
  		case types.DELETE_STORY_SUCCESS:
  			let deleteSucc = action.deleteSucc,
  				deleteId = action.deleteId,
  				emptyStory = {
  					userTitle: '',
  					userStory: '',
  					author: {
  						firstName: '',
  						lastName: ''
  					}
  				};

  			const newState_9 = update(state, {
  				story: {
  					$set: emptyStory
  				},
  				userTitle: {
  					$set: ''
  				},
  				userStory: {
  					$set: ''
  				},
  				author: {
  					firstName: {
  						$set: ''
  					},
  					lastName: {
  						$set: ''
  					}
  				},
  				newAuthor: {
  					$set: ''
  				},
  				id: {
  					$set: ''
  				}
  			});
        return newState_9;
      case types.DELETE_STORY_ERR:
        const newState_10 = update(state, {
          storyMessage : {
            $set : action.deleteErr
          }
        });
        case types.GET_PHOTO_SUCCESS:
    			const newState_11 = update(state, {
    				photo: {
    					$set: action.photoSucc
    				}
    			});
    			return newState_11;
    		case types.GET_PHOTO_ERROR:
    			const newState_12 = update(state, {
    				photo: {
    					$set: action.photoErr //add a placeholder image
    				}
    			});
    			return newState_12;
    default:
      return state;
  }
};
