import _ from 'lodash';
import {
    FETCH_CHURCH,
    FETCH_CHURCHES,
    CREATE_CHURCH,
    EDIT_CHURCH,
    DELETE_CHURCH
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CHURCHES:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_CHURCH:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_CHURCH:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_CHURCH:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_CHURCH:
            return _.omit(state, action.payload);
        default:
            return state
    }
};

