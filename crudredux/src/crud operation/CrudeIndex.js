import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateItem, deleteItem } from './actions';
import './crudeindex.css';

const CrudeIndex = () => {
    const [data, setData] = useState({ name: '', email: '' });
    const [editIndex, setEditIndex] = useState(null);
    const items = useSelector((state) => state.crud.items);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            dispatch(updateItem(editIndex, data));
            setEditIndex(null);
        } else {
            dispatch(addItem(data));
        }
        setData({ name: '', email: '' });
    };

    const handleEdit = (index) => {
        setData(items[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        dispatch(deleteItem(index));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group formGroup">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        className="form-control input"
                        placeholder="Enter Name"
                        required
                    />
                </div>
                <div className="form-group formGroup">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="form-control input"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary button">
                    {editIndex !== null ? 'Update' : 'Submit'}
                </button>
            </form>
            <ul className="list">
                {items.map((item, index) => (
                    <li key={index} className="listItem">
                        {item.name} - {item.email}
                        <button onClick={() => handleEdit(index)} className="editButton">
                            Edit
                        </button>
                        <button onClick={() => handleDelete(index)} className="deleteButton">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CrudeIndex;
