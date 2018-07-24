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
    // Devolvemos un componente en caso de que la lista este vacia
    <Empty text="No hay sugerencias"/>
  )
  renderSeparator = () => (
    // Devolvemos el componente que servirá de separador
    <Separator/>
  )
  renderItem = ({item}) => (
    // Rendereamos in item de la lista en el componente Suggestion
    <Suggestion {...item}/>
  )
  keyExtractor = (item) => {
    // Devolvemos el id del item como un String para usarlo como Key
    return item.id.toString();
  }

  render() {
    /**
     * FlatList
     * En data obtenemos los datos por props del API
     * ItemSeparatorComponent rendereamos el separador con this.renderSeparator
     * En caso de que la lista este vacia con this.renderSeparator rendereamos un componente
     * Con renderItem rendereamos un componente del array traido por data usando this.renderItem
     * Con keyExtractor vamos a definir como key el id de los elementos del array
     */
    return (
      <Layout
        title='Recomendado para ti'
      >
        <FlatList
          data={this.props.list}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
