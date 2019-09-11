
export interface Contact {
    id: string,
    name: string,
    room: string,
    info: string,
    img: string,
}
export const CREATE_CONTACT = "CREATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const SET_VISIBILITY_FILTER_CONTACTS = "SET_VISIBILITY_FILTER_CONTACTS";

export interface CreateContactAction {
    type: typeof CREATE_CONTACT,
    payload: Contact,
}

export interface DeleteContactAction {
    type: typeof DELETE_CONTACT,
    id: string,
}

export interface SetVisibilityFilterContactsAction {
    type: typeof SET_VISIBILITY_FILTER_CONTACTS,
    filter: string,
}

export type ContactsActionTypes = CreateContactAction | DeleteContactAction;
