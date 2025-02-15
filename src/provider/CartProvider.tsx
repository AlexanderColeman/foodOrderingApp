import { CartItem, Product } from '@/types';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { randomUUID } from 'expo-crypto'

type CartType = {
  items: CartItem[],
  addItems: (product: Product, size: CartItem["size"]) => void,
  updateQuantity: (itemId: string, amount: -1 | 1) => void,
  total: number
};

export const CartContext = createContext<CartType>({
  items: [],
  addItems: () => {},
  updateQuantity: () => {},
  total: 0
 });

const CartProvider = ({ children }: PropsWithChildren) => {

  const [items, setItems] = useState<CartItem[]>([]);

  const addItems = (product: Product, size: CartItem["size"]) => {

    const existingItem = items.find(item => item.product_id === product.id && item.size === size);

    if(existingItem) {
      return updateQuantity(existingItem.id, 1);
    }

    const newCarItem: CartItem = { 
      id: randomUUID(),
      product, 
      product_id: 
      product.id, 
      size, 
      quantity: 1 
    };

    setItems([newCarItem, ...items]);
  }

  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setItems(
      items.map((item) => 
        item.id !== itemId ? item : { ...item, quantity: item.quantity + amount }
      ).filter(item => item.quantity > 0)
    );
  };

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ items, addItems, updateQuantity, total}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);
export default CartProvider;