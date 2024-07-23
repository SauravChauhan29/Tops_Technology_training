import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateItem, deleteItem } from './actions';


const CrudMFile = () => {
    const [data, setData] = useState({ name: '', email: '' });
    const [Id, setId] = useState(null);
    const items = useSelector((state) => state.crud.items);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
             ...data, 
             [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Id !== null) {
            dispatch(updateItem(Id, data));
            setId(null);
        } else {
            dispatch(addItem(data));
        }
        setData({ name: '', email: '' });
    };

    const handleEdit = (index) => {
        setData(items[index]);
        setId(index);
    };

    const handleDelete = (index) => {
        dispatch(deleteItem(index));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                <div className="form-group formGroup">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        
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
                       
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary button">
                    {Id !== null ? 'Update' : 'Submit'}
                </button>
            </form>
            <ul className="list">
                {items.map((item, index) => (
                    <li key={index} >
                        {item.name} - {item.email}
                        <button onClick={() => handleEdit(index)} >
                            Edit
                        </button>
                        <button onClick={() => handleDelete(index)} >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CrudMFile;
