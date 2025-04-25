import { useState } from 'react';

function NewItemForm({ groceries, setGroceries }) {
  const [form, setForm] = useState({ name: '', price: '', quantity: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || isNaN(form.price) || isNaN(form.quantity)) {
      alert('Please fill all fields with valid numbers!');
      return;
    }

    const newItem = {
      id: Date.now(),
      name: form.name,
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity)
    };

    setGroceries([...groceries, newItem]);
    setForm({ name: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default NewItemForm;
