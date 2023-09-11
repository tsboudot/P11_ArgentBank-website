import api from '../api/api.js';

export const loginUser = (email, password) => async dispatch => {
    try {
        const response = await api.post('/user/login', {
            email,
            password
        });

        const token = response.data.token;

        // Stocker le token dans le local storage (ou session storage selon le besoin)
        localStorage.setItem('token', token);

        // Dispatcher les informations de l'utilisateur
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: { email }  // Supposons que nous ne voulons que l'email pour l'instant
        });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        dispatch({
            type: 'USER_LOGIN_FAILURE',
            payload: error.message
        });
    }
};