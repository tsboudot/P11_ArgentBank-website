import React, { useState } from 'react';

const EditNameModal = ({ onClose }) => {
    const [newUserName, setNewUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous pouvez gérer la logique pour mettre à jour le nom de l'utilisateur
        console.log('Nouveau nom d\'utilisateur:', newUserName);
        onClose(); // ferme la modale après la soumission
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


export default EditNameModal;