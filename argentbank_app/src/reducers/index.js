import { combineReducers } from 'redux';
import userReducer from './user.reducer';
// ... importez d'autres reducers

const rootReducer = combineReducers({
    auth: userReducer,
});

export default rootReducer;