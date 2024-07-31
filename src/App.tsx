import React from 'react';
import {StyleSheet, SafeAreaView, View, FlatList, Text} from 'react-native';
import ProductCard from './components/productCard/ProductCard';
import SearchBar from './components/searchBar/searchbar';

import product_data from './product_data.json';

const App = () => {
  const render_data = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>

      <View>
        <FlatList
          ListHeaderComponent={<SearchBar />}
          data={product_data}
          renderItem={render_data}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
  },
});

export default App;
