import createReducer from './createReducer';
import * as types from '../actions/types';

export const search = createReducer({}, {
    [types.SEARCH](state, action) {
        return { ...state };
    }
});
