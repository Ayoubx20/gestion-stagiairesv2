import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SbarAd from '../nav/SbarAD';

const API_URL = 'http://localhost:5000/Usserlist';

const UserListAD = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [validationMessage, setValidationMessage] = useState('');
    const [note, setNote] = useState('');

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get(API_URL);
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    };

    const validateStage = async (id) => {
        try {
            await axios.patch(`${API_URL}/${id}`, { stageValidated: true });
            getUsers(); 
        } catch (error) {
            console.error('Error validating stage:', error);
        }
    };

    const rejectStageValidation = async (id) => {
        try {
            await axios.patch(`${API_URL}/${id}`, { stageValidated: false });
            getUsers(); 
        } catch (error) {
            console.error('Error rejecting stage validation:', error);
        }
    };

    const handleValidateStage = async (id) => {
        try {
            await validateStage(id);
            const userToValidate = users.find(user => user.id === id);
            setValidationMessage(`Stage validé pour ${userToValidate.name}`);
        } catch (error) {
            console.error('Error validating stage:', error);
        }
    };

    const handleRejectStageValidation = async (id) => {
        try {
            await rejectStageValidation(id);
            const userToReject = users.find(user => user.id === id);
            setValidationMessage(`Stage rejeté pour ${userToReject.name}`);
        } catch (error) {
            console.error('Error rejecting stage validation:', error);
        }
    };

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    const addNote = async (id) => {
        try {
            await axios.post(`${API_URL}/${id}/note`, { note });
            getUsers(); 
        } catch (error) {
            console.error('Error adding note:', error);
        }
    };

    return (
        <>
            <SbarAd />
            <div className="container mt-5" style={{marginBottom: '270px'}}>
                <br /><br />
                <div className='row'>
                    <div className='col'>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <h2>Liste des stagiaires</h2>
                                <table className='table'>
                                    <thead className='table-primary'>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Email</th>
                                            <th>Adresse de l'entreprise</th>
                                            <th>Ville de l'entreprise</th>
                                            <th>Téléphone</th>
                                            <th>Encadrant</th>
                                            <th>Intitulé du sujet</th>
                                            <th>Actions</th>
                                            <th>Note</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.adresse}</td>
                                                <td>{user.Ville}</td>
                                                <td>{user.telephone}</td>
                                                <td>{user.encadrant}</td>
                                                <td>{user.sujet}</td>
                                               
                                                <td>
                                                    {user.name &&   (
                                                        <>
                                                            <button onClick={() => handleValidateStage(user.id)} className='btn btn-success mr-2'>Valider le stage</button>
                                                            <button onClick={() => handleRejectStageValidation(user.id)} className='btn btn-danger'>Rejeter le stage</button>
                                                        </>
                                                    )}
                                                </td>
                                                <td>
                                                    <input type="text" value={note.id} onChange={handleNoteChange} />
                                                    <button onClick={() => addNote(user.id)} className='btn btn-primary'>Ajouter une note</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {validationMessage && <p>{validationMessage}</p>}
                            </>
                        )}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Stagiaires validés</h2>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Nom</th>
                                    <th>Email</th>

                                    <td>stage valid</td>

                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.filter(user => user.stageValidated==='1').map((user) => ( 
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.stageValidated ? 'oui' : 'non'}</td>

                                        <td>{user.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col'>
                        <h2>Stagiaires rejetés</h2>
                        <table className='table'>
                            <thead className='table-danger'>
                                <tr>
                                    <th>Nom</th>
                                    <th>Email</th>
                                    <th>Stage Validé</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.filter(user => user.stageValidated==='0').map((user) => ( 
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.stageRejected}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserListAD;
