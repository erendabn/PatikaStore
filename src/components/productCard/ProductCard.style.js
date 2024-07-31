import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    maxWidth: 200,
  },
  image_container: {
    resizeMode: 'stretch',
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2.5,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    minHeight: 40,
  },
  price: {
    margin: 10,
    alignItems: 'left',
    color: 'black',
  },
  stock: {
    margin: 10,
    fontSize: 15,
    color: 'red',
    right: 1,
    bottom: 1,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
});
