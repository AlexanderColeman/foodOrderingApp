import { Stack } from "expo-router";
import { Text, Pressable, } from 'react-native'
import React from 'react'
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";


//// 1:38:18

export default function MenuStack() {
  return( 
  <Stack screenOptions={{
    headerRight: () => (
      <Link href="/cart" asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="shopping-cart"
              size={25}
              color={Colors.light.tint}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    ),

  }}>
    
    <Stack.Screen name="index" options={{title: 'Menu'}}/>
  </Stack>
  );
}