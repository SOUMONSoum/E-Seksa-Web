import * as types from './index';
import API from '../api/axios';

export const getEvents = () => dispatch => {
  dispatch(setEventsLoading());
  API.get(`/v1/events`)
    .then(res => 
      dispatch({
        type: types.GET_EVENTS,
        payload: res.data
      }))
  
};

export const createEvent = event => dispatch => {
  API.post(`/v1/events`, event)
    .then(res =>
      dispatch({
        type: types.CREATE_EVENT,
        payload: res.data
      }))
};

export const deleteEvent = id => dispatch => {
  API.delete(`/v1/events/${id}`)
    .then(res => 
      dispatch({
        type: types.DELETE_EVENT,
        payload: id
      }))
}

export const setEventsLoading= () => {
  return {
    type: types.EVENTS_LOADING
  };
}