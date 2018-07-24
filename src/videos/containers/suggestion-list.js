import React, { Component } from 'react';
import { 
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/suggestions-empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  renderEmpty = () => (
    <Empty text="No hay sugerencias"/>
  )
  renderSeparator = () => (
    <Separator/>
  )
  renderItem = ({item}) => (
    <Suggestion {...item}/>
  )

  render() {
    const list = [
      {
        title: 'Titulo',
        key: '1'
      },
      {
        title: 'Otro Titulo',
        key: '2'
      }
    ]
    return (
      <Layout
        title='Recomendado para ti'
      >
        <FlatList
          data={list}
          ItemSeparatorComponent={this.renderSeparator}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
