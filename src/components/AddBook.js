import React, { useState } from 'react';

const AddBook = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price) {
            alert('Please enter both name and price.');
            return;
        }
        onAdd({ name, price: parseFloat(price) });
        setName('');
        setPrice('');
    };

    return (
        <div>
            <h3>Add Book</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddBook;
