import { useState } from 'react';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (productId) => {
    if (cartItems.includes(productId)) {
      alert('Este producto ya está en el carrito');
    } else{
      setCartItems((prevCartItems) => [...prevCartItems, productId]);
      alert('Producto agregado al carrito.');

    }
  };
  const clearCart = () => {
    setCartItems([]);
    alert('Carrito vaciado');
  }
}





