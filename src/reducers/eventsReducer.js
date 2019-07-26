import * as types from '../actions/index';

const initialState = {
  events: [],
  loading: false
}; 

export default function(state = initialState, action) {
  switch(action.type) {
    case types.GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    case types.DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload)
      };
    case types.CREATE_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events]
      };
    case types.EVENTS_LOADING:
      return {
        ...state,
        loading: true
      }
      default:
        return state;
  }
}