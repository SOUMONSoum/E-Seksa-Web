import { combineReducers } from 'redux';

import SigninReducer from './signinReducer';
import SignupReducer from './signupReducer';
import EventsReducer from './eventsReducer'

const rootReducer = combineReducers({
  signin: SigninReducer, 
  signup: SignupReducer,
  event: EventsReducer
});

export default rootReducer;