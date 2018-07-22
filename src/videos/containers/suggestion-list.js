import React, { Component } from 'react';
import { 
  FlatList,
  Text
} from 'react-native';

class SuggestionList extends Component {
  render() {
    const list = [
      {
        title: 'Ivan',
        key: '1'
      },
      {
        title: 'Emmanuel',
        key: '2'
      }
    ]
    return (
      <FlatList
        data={list}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    );
  }
}

export default SuggestionList;
