import React, { Component } from 'react';
import { Text } from 'react-native';

import API from './utils/api';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';

type Props = {};
export default class App extends Component<Props> {
  state = {
    // Seteamos una lista vacia para las sugerencias y categorías a pasar por props
    suggestionList: [],
    categoriesList: []
  }

  // Hacemos asincrono el metodo componentDidMount
  async componentDidMount() {
    // Hardcodeamos con Id 10 un array de sugerencias
    const movies = await API.getSuggestion(10);

    // Obtenemos las peliculas para las categorías
    const categories = await API.getMovies();
    
    // A los arrays vacios les agregamos el array que nos llega del API
    this.setState({
      suggestionList: movies,
      categoriesList: categories
    });
    console.log(this.state.categoriesList);
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <CategoryList
          list={this.state.categoriesList}
        />
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}
