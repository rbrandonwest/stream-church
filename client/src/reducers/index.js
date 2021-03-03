import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import churchReducer from './churchReducer';
import userReducer from './userReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    churches: churchReducer,
    users: userReducer
});