import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUserName } from '../actions/updateUser';

const EditNameModal = ({ onClose, updateUserName }) => {
    const [newUserName, setNewUserName] = useState('');
    const token = localStorage.getItem('token'); // Récupérez le token depuis le local storage

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserName(newUserName, token); // Mettre à jour le nom d'utilisateur
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <label>
                        Votre nouveau nom d'utilisateur:
                        <input
                            type="text"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Valider</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};


export default connect(null, { updateUserName })(EditNameModal);