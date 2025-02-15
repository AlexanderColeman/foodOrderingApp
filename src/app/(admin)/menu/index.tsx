import {  View, FlatList } from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@components/productListItem';

export default function MenuScreen() {
  return (
  <View>
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
      
    <ProductListItem product={products[3]} />
  </View>
  );
}