import { useState } from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({ cart, setCart, groceries }) {
  const [search, setSearch] = useState('');

  const filteredItems = groceries.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredItems.map(item => (
        <GroceryItem key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default GroceryList;
