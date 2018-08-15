import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
  
class Movie extends Component {

  closeVideo = () => {
    // Con esta acción seteamos en false la propiedad selectedMovie
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: false,
      }
    });
  }

  render() {
    // Como children de header le mandamos el componente Close que acciona closeVideo
    return (
      <MovieLayout>
        <Header>
          <Close
            onPress={this.closeVideo}
          />
        </Header>
        <Player />
      </MovieLayout>
    );
  }
}
  
export default connect(null)(Movie);
  