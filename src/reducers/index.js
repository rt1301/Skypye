import contact from './contacts';
import user from './user';
import messages from './messages';
import typing from './typing';
import {combineReducers} from 'redux';
import activeUserId from './activeUserId';
export default combineReducers({
    contact,
    user,
    messages,
    activeUserId,
    typing
});