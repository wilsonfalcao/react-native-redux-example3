import {combineReducers} from 'redux';
import CheckList from "./checkListReducer/reducer";
import CheckList2 from "./testListReducer/reducer";

export const rootReducer = combineReducers({
    CheckList,
    CheckList2,
});