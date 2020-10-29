import contact from './contacts';
import user from './user';
import {combineReducers} from 'redux';
import activeUserId from './activeUserId';
export default combineReducers({
    contact:contact,
    user:user,
    activeUserId:activeUserId
})