import {  View, } from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@components/productListItem';

export default function MenuScreen() {
  return (
  <View>
    <ProductListItem product={products[3]} />
  </View>
  );
}