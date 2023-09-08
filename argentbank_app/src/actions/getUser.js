import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";

export function logInUser(user) {
    return {
        type: LOGIN_USER,
        payload: user
    };
}