import { Routes, Route, Link } from 'react-router-dom';
import GroceryList from './components/GroceryList';
import Cart from './components/Cart';
import NewItemForm from './components/NewItemForm';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setGroceries(data))
      .catch(() => alert('Error fetching data!'));
  }, []);

  return (
    <div className="App">
      <h1>Grocery Store</h1>
      <nav>
        <Link to="/">Grocery List</Link> | 
        <Link to="/cart">Cart</Link> | 
        <Link to="/new">Add New Item</Link>
      </nav>
      <Routes>
        <Route path="/" element={<GroceryList cart={cart} setCart={setCart} groceries={groceries} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/new" element={<NewItemForm groceries={groceries} setGroceries={setGroceries} />} />
      </Routes>
    </div>
  );
}

export default App;
