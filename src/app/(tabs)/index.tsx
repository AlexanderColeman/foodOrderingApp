import {  View, } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/productListItem';

export default function MenuScreen() {
  return (
  <View>
    <ProductListItem product={products[5]} />
  </View>
  );
}