import { createStore } from 'redux';
import reducer from './reducers/videos';

// Creamos el Store, le pasamos los reducres y un estado inicial (las listas)
const store = createStore(reducer, {
  suggestionList: [],
  categoryList: []
});

export default store;
