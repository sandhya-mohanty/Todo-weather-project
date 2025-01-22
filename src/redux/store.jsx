// redux/store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,

});

const store = createStore(rootReducer);

export default store;
