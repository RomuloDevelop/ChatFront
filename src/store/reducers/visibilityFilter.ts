import { SET_VISIBILITY_FILTER, VisibilityFilter, SetVisibilityAction } from "../index";
import { AnyAction } from "redux";

const initialState: VisibilityFilter = VisibilityFilter.SHOW_ALL;

const visibilityFilter = (state=initialState, action: AnyAction)=>{
    switch(action.type){
        case SET_VISIBILITY_FILTER:
           return action.filter
        default:
           return state
    }
}

export default visibilityFilter;