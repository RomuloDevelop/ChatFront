import { SET_VISIBILITY_FILTER_CONTACTS, Contact, CREATE_CONTACT, DELETE_CONTACT } from "../types/contacts";
import { AnyAction } from "redux";

const initialStateContact: Contact[] = [];

const contacts = (state: Contact[]=initialStateContact, action: AnyAction)=>{
    switch(action.type){
        case CREATE_CONTACT:
            return [...state, action.payload];
        case DELETE_CONTACT:
            return state.filter(
                contact => contact.id !== action.id
            );
        default:
           return state
    }
}

const initialState: string = "";

const visibilityFilterContacts = (state: string=initialState, action: AnyAction)=>{
    switch(action.type){
        case SET_VISIBILITY_FILTER_CONTACTS:
            return state = action.filter;
        default:
           return state
    }
}

export {
    contacts,
    visibilityFilterContacts,
};