function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, count) { 
  let newCart = structuredClone(cart);
  let newCount;
  let newProduct = newCart.filter((p) => product.id === p.id)[0];
  if(newProduct?.quantity){
    newCount = newProduct.quantity + count;
  } else{
    newCount = count;
  }
  if(newCount > product.stock || count === 0){
      throw new RangeError;
    }  
  if(!newProduct){
    newCart.push({...product, quantity: count})
    return newCart;
  }
  else{
    return newCart.map((p) => {
      if(p.id === newProduct.id){
        return {...p, quantity: newCount};
      }
      return p;
    });
  }
}
function changeQuantity(cart, id, count) { 
  const product = cart.filter((p) => p.id === id)[0];
  if(!product){
    return cart; 
  } 
  if(count === 0 || count > product.stock){
    throw new RangeError;
  }
  return cart.map((p) => {
    if(p.id === product.id){
      return {...p, quantity: count};
    }
    return p;
  });
} 
function removeFromCart(cart, id) { 
  const exists = cart.some(p => p.id === id);
  return exists ? cart.filter((p) => p.id !== id) : cart; 
}
function calculateCartSubtotal(cart) { 
  return cart.reduce((sum, p) => {
    return sum += p.quantity * p.price;
  }, 0); 
}
function calculateOrderTotal(cart, promo) { 
  let total = 0;
  let discount = 0;
  let delivery = 30000;
  const subtotal = calculateCartSubtotal(cart);
  total = subtotal;
  if(promo === 'SAVE10' && total >= 20000){
    discount = subtotal * 0.1;
    total -= discount;
  }
  if(total >= 50000){
    delivery = 0;
  }
  total += delivery;
  return {subtotal: subtotal, discount: discount, delivery: delivery, total: total};

}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
