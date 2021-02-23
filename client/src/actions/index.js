import churches from '../apis/churches';
import { 
    SIGN_IN,
    SIGN_OUT,
    CREATE_CHURCH,
    FETCH_CHURCHES,
    FETCH_CHURCH,
    EDIT_CHURCH,
    DELETE_CHURCH
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

export const createChurch = formValues => async dispatch => {
    const response = await churches.post('/churches', formValues);

    dispatch({ type: CREATE_CHURCH, payload: response.data })
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
}

export const deleteChurch = (id) => async dispatch => {
    await churches.delete(`/churches/${id}`);

    dispatch({ type: DELETE_CHURCH, payload: id })
}