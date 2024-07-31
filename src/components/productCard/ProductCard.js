import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = product_data => {
  product_data = product_data.product;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image_container}
        source={{uri: product_data.imgURL}}
      />
      <Text style={styles.title} numberOfLines={3}>
        {product_data.title}
      </Text>
      <Text style={styles.price}>{product_data.price}</Text>
      {product_data.inStock === false && (
        <Text style={styles.stock}>STOKTA YOK</Text>
      )}
      <View>{}</View>
    </View>
  );
};

export default ProductCard;
