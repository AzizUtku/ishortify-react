import { combineReducers } from 'redux';
import auth from './auth/reducer';
import business from './business/reducer';
import main from './main/reducer';
import layout from './layout/reducer';

const rootReducer = combineReducers({ auth, business, main, layout });

export default rootReducer;