import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Sbar from '../nav/Sbar';
import Footer from '../foote/footer';

const API_URL = 'http://localhost:5000/UsserList';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editedUser, setEditedUser] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const res = await axios.get(API_URL);
            console.log("API Response:", res.data);
            if (Array.isArray(res.data)) {
                setUsers(res.data);
            } else {
                console.error("Invalid data format received from the server");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            getUsers(); // Refresh the user list after deletion
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleEdit = (user) => {
        setEditedUser(user);
    };

    const handleSave = async () => {
        try {
            await axios.put(`${API_URL}/${editedUser.id}`, editedUser);
            setEditedUser(null);
            getUsers(); 
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <Sbar />
            <div className="container mt-5" style={{marginBottom: '430px'}}>
                <br/><br/>
                <div className='row'>
                    <div className='col'>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <table className={`table ${editedUser ? 'float-right' : ''}`}>
                                    <thead>
                                        <tr>
                                            <th>name</th>
                                            <th>email</th>
                                            <th>adresse de l'entreprise</th>
                                            <th>ville de  l'entreprise</th>
                                            <th>telephone</th>
                                            <th>encadrant</th>
                                            <th>intitule de sujet</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{editedUser && editedUser.id === user.id ? <input type="text" name="name" value={editedUser.name} onChange={handleChange} /> : user.name}</td>
                                                <td>{editedUser && editedUser.id === user.id ? <input type="text" name="email" value={editedUser.email} onChange={handleChange} /> : user.email}</td>
                                                <td>{editedUser && editedUser.id === user.id ? <input type="text" name="adresse" value={editedUser.adresse} onChange={handleChange} /> : user.adresse}</td>
                                                <td>{editedUser && editedUser.id === user.id ? <input type="text" name="Ville" value={editedUser.Ville} onChange={handleChange} /> : user.Ville}</td>
                                                <td>{editedUser && editedUser.id === user.id ? <input type="text" name="telephone" value={editedUser.telephone} onChange={handleChange} /> : user.telephone}</td>
                                                <td>{editedUser && editedUser.id === user.id ? <input type="text" name="encadrant" value={editedUser.encadrant} onChange={handleChange} /> : user.encadrant}</td>
                                                <td>{editedUser && editedUser.id === user.id ? <input type="text" name="sujet" value={editedUser.sujet} onChange={handleChange} /> : user.sujet}</td>
                                                <td>
                                                    {editedUser && editedUser.id === user.id ? (
                                                        <>
                                                            <button onClick={() => handleSave()} className='btn btn-primary'>Save</button>
                                                            <button onClick={() => setEditedUser(null)} className='btn btn-secondary'>Cancel</button>
                                                        </>
                                                    ) : (
                                                        <button onClick={() => handleEdit(user)} className='btn btn-primary'>Edit</button>
                                                    )}
                                                    <button onClick={() => deleteUser(user.id)} className='btn btn-danger'>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default UserList;
