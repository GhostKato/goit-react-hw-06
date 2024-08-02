import { nanoid } from 'nanoid';
import { ADD_CONTACT, DELETE_CONTACT, SET_SEARCH_QUERY } from './constants';

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: { id: nanoid(), name, number }
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: { id }
});

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: { query }
});
