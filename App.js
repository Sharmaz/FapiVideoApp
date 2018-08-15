import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import API from './utils/api';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';

type Props = {};
export default class App extends Component<Props> {
 
 // Hacemos asincrono el metodo componentDidMount
  async componentDidMount() {
    // Hardcodeamos con Id 10 un array de sugerencias
    const suggestionList = await API.getSuggestion(10);
    
    // Con el metodo dispatch del store creamos la acción de sugerencias
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    });

    // Obtenemos las peliculas para las categorías
    const categoryList = await API.getMovies();

    // Con el metodo dispatch del store creamos la acción de las categorías
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Text>Buscador</Text>
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}
