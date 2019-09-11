import {
    CREATE_CONTACT,
    DELETE_CONTACT,
    SET_VISIBILITY_FILTER_CONTACTS,
    SetVisibilityFilterContactsAction, 
    ContactsActionTypes, 
    Contact} from '../types/contacts';

function createContact(payload: Contact): ContactsActionTypes {
    return{
        type: CREATE_CONTACT,
        payload
    }
}

function deleteContact(id: string): ContactsActionTypes {
  return {
    type: DELETE_CONTACT,
    id
  }
}

function setVisibilityFilterContactsAction(filter: string): SetVisibilityFilterContactsAction {
  return {
    type: SET_VISIBILITY_FILTER_CONTACTS,
    filter,
  }
}

export {
    createContact,
    deleteContact,
    setVisibilityFilterContactsAction
};