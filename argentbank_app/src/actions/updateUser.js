import { updateUserProfile } from "../api/userApi";

export const updateUserName = (userName, token) => async dispatch => {
    try {
        const response = await updateUserProfile({ userName: userName }, token); // Supposons que votre API s'attend à { userName: "valeur" }

        dispatch({
            type: 'USER_UPDATE_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du profil:', error);
        dispatch({
            type: 'USER_UPDATE_FAILURE',
            payload: error.message
        });
    }
};

