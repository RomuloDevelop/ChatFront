import { combineReducers } from 'redux';
import messages from './messages';
import visibilityFilter from './visibilityFilter';
import {contacts, visibilityFilterContacts} from './contacts';

const rootReducer = combineReducers({messages, contacts, visibilityFilter, visibilityFilterContacts});
export default  rootReducer;
export type AppState = ReturnType<typeof rootReducer>