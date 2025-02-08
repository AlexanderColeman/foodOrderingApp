import { View, Text } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';

const productDetailScreen = () => {

  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title: 'Details ' + id}}/>
      <Text style={{fontSize: 20}}>Product Detail Screen {id}</Text>
    </View>
  );
}

export default productDetailScreen;