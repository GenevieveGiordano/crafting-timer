import React, { useEffect, useState } from 'react';

import '../styles/adminStyles.css';
import FormStyles from '../styles/Form.module.scss';
import ButtonStyles from '../styles/Buttons.module.scss';


const backendUrl = 'https://crafting-timer.onrender.com';
const adminSecret = 'mysecretkey';

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    _id: '',
    name: '',
    image: '',
    cooldown: '',
    tier: '',
    group: '',
    recipe: '',
    price: '',
    vendor: '',
    location: '',
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetch(`${backendUrl}/api/items`)
      .then((res) => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editing ? 'PUT' : 'POST';
    const url = editing ? `${backendUrl}/api/items/${form._id}` : `${backendUrl}/api/items`;

    const body = { ...form };
    if (editing) delete body._id;

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': adminSecret,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('Failed to save item');
      const savedItem = await res.json();

      if (editing) {
        setItems((items) =>
          items.map((item) => (item._id === savedItem._id ? savedItem : item))
        );
      } else {
        setItems((items) => [...items, savedItem]);
      }

      setForm({
        _id: '',
        name: '',
        image: '',
        cooldown: '',
        tier: '',
        group: '',
        recipe: '',
        price: '',
        vendor: '',
        location: '',
      });
      setEditing(false);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    try {
      const res = await fetch(`${backendUrl}/api/items/${id}`, {
        method: 'DELETE',
        headers: { 'x-api-key': adminSecret },
      });
      if (!res.ok) throw new Error('Failed to delete item');
      setItems((items) => items.filter((item) => item._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Item Manager</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        <label className="admin-label" htmlFor="name">Name</label>
        <input
          id="name"
          className="admin-input"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label className="admin-label" htmlFor="image">Image path</label>
        <input
          id="image"
          className="admin-input"
          placeholder="Image path (e.g. /images/armor.png)"
          name="image"
          value={form.image}
          onChange={handleChange}
          required
        />

        <label className="admin-label" htmlFor="cooldown">Cooldown</label>
        <input
          id="cooldown"
          className="admin-input"
          placeholder="Cooldown"
          name="cooldown"
          type="number"
          value={form.cooldown}
          onChange={handleChange}
        />

        <label className="admin-label" htmlFor="tier">Tier</label>
        <input
          id="tier"
          className="admin-input"
          placeholder="Tier"
          name="tier"
          value={form.tier}
          onChange={handleChange}
        />

        <label className="admin-label" htmlFor="group">Group</label>
        <input
          id="group"
          className="admin-input"
          placeholder="Group"
          name="group"
          value={form.group}
          onChange={handleChange}
        />

        <label className="admin-label" htmlFor="recipe">Recipe</label>
        <input
          id="recipe"
          className="admin-input"
          placeholder="Recipe"
          name="recipe"
          value={form.recipe}
          onChange={handleChange}
        />

        <label className="admin-label" htmlFor="price">Price</label>
        <input
          id="price"
          className="admin-input"
          placeholder="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />

        <label className="admin-label" htmlFor="vendor">Vendor</label>
        <input
          id="vendor"
          className="admin-input"
          placeholder="Vendor"
          name="vendor"
          value={form.vendor}
          onChange={handleChange}
        />

        <label className="admin-label" htmlFor="location">Location</label>
        <input
          id="location"
          className="admin-input"
          placeholder="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
        />

        <div className="admin-buttons">
          <button type="submit" className="admin-btn admin-btn-submit">
            {editing ? 'Update Item' : 'Add Item'}
          </button>
          {editing && (
            <button
              type="button"
              className="admin-btn admin-btn-cancel"
              onClick={() => {
                setEditing(false);
                setForm({
                  _id: '',
                  name: '',
                  image: '',
                  cooldown: '',
                  tier: '',
                  group: '',
                  recipe: '',
                  price: '',
                  vendor: '',
                  location: '',
                });
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr style={{ borderColor: '#845cf1' }} />

      <table className="admin-table" role="grid">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Tier</th>
            <th>Group</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            
            <tr key={item._id}>
              <td><img src={`${backendUrl}${item.image}`} alt={item.name} style={{ width: '60px', height: '60px' }} /></td>
              <td>{item.name}</td>
              <td>{item.tier}</td>
              <td>{item.group}</td>
              <td>
                <button className="admin-btn admin-btn-submit" onClick={() => handleEdit(item)}>
                  Edit
                </button>{' '}
                <button className="admin-btn admin-btn-cancel" onClick={() => handleDelete(item._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
