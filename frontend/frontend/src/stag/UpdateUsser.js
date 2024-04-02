
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UpdateUser = ({ userId, onCancel, onUpdate }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/UsserList/${userId}`);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/UsserList/${userId}`, user);
            onUpdate(user);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='container'>
            <h2>Edit User</h2>
            <form>
                <div className='form-group'>
                    <label>Name:</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </div>
                {/* Add other fields here */}
                <button type="button" onClick={handleSave} className='btn btn-primary'>Save</button>
                <button type="button" onClick={onCancel} className='btn btn-secondary'>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateUser;

