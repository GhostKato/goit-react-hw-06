import { combineReducers } from 'redux';
import phoneBook from '../../assets/phonebook.json';

const initialContacts = phoneBook;

const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.payload];
    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return action.payload.query;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  searchQuery: searchReducer
});

export default rootReducer;
