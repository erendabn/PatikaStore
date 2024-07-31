import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './searchbar.style';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." style={styles.searchArea} />
    </View>
  );
};

export default SearchBar;
