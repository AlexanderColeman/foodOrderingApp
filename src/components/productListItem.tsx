import Colors from '@/constants/Colors';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Product } from '../types';
import { Link, useSegments } from 'expo-router';

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    // realtive path ./ keeps you in admin or user navigation 
    <Link href={`./menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: product.image || "https://via.placeholder.com/150" }} 
              style={styles.image} 
              resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: '50%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1, 
  }
});
