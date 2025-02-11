import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import products from '@assets/data/products';
import { useState } from 'react';
import Button from '@components/Button';

const sizes = ['S', 'M', 'L', 'XL'];

const productDetailScreen = () => {
  const {id} = useLocalSearchParams();
  const product = products.find(product => product.id.toString() === id);

  const [selectedSize, setSelectedSize] = useState('M');

  const addToCart = () => {
    console.warn('Adding to cart', product, selectedSize);
  }

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

      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map(size => (
           <Pressable 
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size, 
              {
                backgroundColor: selectedSize === size ? 'gainsboro' : 'white'
              }
            ]} 
            key={size}>
            <Text style={styles.sizeText}>{size}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart}  text="Add to cart"/>
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
    marginTop: 'auto',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size : {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  }

});

export default productDetailScreen;