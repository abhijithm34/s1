function Cart({ cart, setCart }) {
  const updateQuantity = (id, change) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item
    ));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name} - ₹{item.price} x {item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        </div>
      ))}
      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
