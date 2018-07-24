import React, { Component } from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    // Seteamos una lista vacia para las sugerencias el cual vamos a pasar por props
    suggestionList: []
  }

  // Hacemos asincrono el metodo componentDidMount
  async componentDidMount() {
    // Hardcodeamos con Id 10 un array de sugerencias
    const movies = await API.getSuggestion(10);
    
    // Al array vacio le agregamos el array que nos llega del API
    this.setState({
      suggestionList: movies,
    });
    console.log(this.state.suggestionList);
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}
