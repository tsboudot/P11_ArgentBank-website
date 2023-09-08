import { LOGIN_USER } from "../actions/getUser";
const initialState = { user: undefined };

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}