import { combineReducers } from 'redux'
import jobListReducer from './jobListReducer';

export default combineReducers({
    jobs: jobListReducer
});