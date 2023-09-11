const initialState = {
    user: null,
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
            // Mettez à jour l'état en cas de succès de la connexion
            return {
                ...state,
                user: action.payload,  // Ici, nous mettons à jour les informations de l'utilisateur
                isAuthenticated: true, // Supposons que vous ayez un champ pour vérifier si l'utilisateur est authentifié
                error: null  // Réinitialiser les erreurs précédentes, si elles existent
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