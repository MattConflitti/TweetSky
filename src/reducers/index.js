import { combineReducers } from 'redux';
import GetTweetsReducer from './GetTweetsReducer';

export default combineReducers({
    tweets: GetTweetsReducer
});

