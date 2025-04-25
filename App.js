import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2>Fruit List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;