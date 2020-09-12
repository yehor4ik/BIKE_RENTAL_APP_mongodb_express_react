import { combineReducers } from 'redux';

import listBike from './listBikeReducer';
import createForm from './createFormReducer';
import dropDownList from './dropDownListReducer';

export default combineReducers({
    listBike,
    createForm,
    dropDownList,
})
