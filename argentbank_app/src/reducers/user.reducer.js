const initialState = {
    user: {
        email: null,
        userName: null,
    },
    isAuthenticated: false,
    error: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload, // Cela comprendra l'email et les détails du profil
                isAuthenticated: true,
                error: null
            };
        case 'USER_LOGIN_FAILURE':
            // Mettez à jour l'état en cas d'échec de la connexion
            return {
                ...state,
                user: null, // Aucune information utilisateur n'est disponible en cas d'échec
                isAuthenticated: false, // L'utilisateur n'est pas authentifié
                error: action.payload  // Stocker le message d'erreur renvoyé par l'action
            };
        default:
            return state;
    }
}