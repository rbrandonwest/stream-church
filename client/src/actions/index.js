import churches from '../apis/churches';
import users from '../apis/users';
import history from '../history';
import { 
    SIGN_IN,
    SIGN_OUT,
    CREATE_CHURCH,
    FETCH_CHURCHES,
    FETCH_CHURCH,
    EDIT_CHURCH,
    DELETE_CHURCH,
    CREATE_USER,
    FETCH_USERS,
    FETCH_USER,
    EDIT_USER,
    DELETE_USER
} from './types'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

//CHURCH ACTIONS

export const createChurch = formValues => async dispatch => {
    const response = await churches.post('/churches', formValues);

    dispatch({ type: CREATE_CHURCH, payload: response.data })
    history.push('/churches');
};

export const fetchChurches = () => async dispatch => {
    const response = await churches.get('/churches');

    dispatch({ type: FETCH_CHURCHES, payload: response.data });
}

export const fetchChurch = (id) => async dispatch => {
    const response = await churches.get(`/churches/${id}`);

    dispatch({ type: FETCH_CHURCH, payload: response.data });
}

export const editChurch = (id, formValues) => async dispatch => {
    const response = await churches.put(`/churches/${id}`, formValues);

    dispatch({ type: EDIT_CHURCH, payload: response.data });
    history.push('/churches');
}

export const deleteChurch = (id) => async dispatch => {
    await churches.delete(`/churches/${id}`);

    dispatch({ type: DELETE_CHURCH, payload: id })
}


//USER ACTIONS

export const createUser = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await users.post('/users', { ...formValues, userId });

    dispatch({ type: CREATE_USER, payload: response.data })
    history.push('/');
};

export const fetchUsers = () => async dispatch => {
    const response = await users.get('/users');

    dispatch({ type: FETCH_USERS, payload: response.data });
}

export const fetchUser = (userId) => async dispatch => {
    const response = await users.get(`/users/${userId}`);

    dispatch({ type: FETCH_USER, payload: response.data });
}

export const editUser = (id, formValues) => async dispatch => {
    const response = await users.put(`/users/${id}`, formValues);

    dispatch({ type: EDIT_USER, payload: response.data });
    history.push('/users');
}

export const deleteUser = (id) => async dispatch => {
    await users.delete(`/users/${id}`);

    dispatch({ type: DELETE_USER, payload: id })
}