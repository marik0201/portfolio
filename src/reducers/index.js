import { combineReducers } from 'redux';
import { profile } from '../components/MainPage/MainPageReducers';
import { adminPanel } from '../components/AdminPanel/AdminPanelReducers';

const rootReducer = combineReducers({
  profile,
  adminPanel
});

export default rootReducer;
