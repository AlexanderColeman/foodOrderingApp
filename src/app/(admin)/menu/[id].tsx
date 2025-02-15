import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import products from '@assets/data/products';
import { useState } from 'react';
import Button from '@components/Button';
import { useCart } from '@/provider/CartProvider';
import { PizzaSize } from '@/types';

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const productDetailScreen = () => {
  const {id} = useLocalSearchParams();
  const {addItems} = useCart();

  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const product = products.find(product => product.id.toString() === id);

  if(!product) {  
    return <Text style={{fontSize: 20}}>Product not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product?.name}}/>
      <Image 
        source={{uri: product.image || "https://via.placeholder.com/150"}}
        style={styles.image}
      />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  price: { 
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default productDetailScreen;