function GroceryItem({ item, cart, setCart }) {
  const addToCart = () => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price}</p>
      <p>Stock: {item.quantity}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default GroceryItem;
