import { 
    SEND_MESSAGE, 
    DELETE_MESSAGE,
    SET_VISIBILITY_FILTER,
    SetVisibilityAction, 
    VisibilityFilter,
    Message, 
    ChatActionTypes } from "../index";

export * from './contacts';

function sendMessage(payload: Message): ChatActionTypes {
    return{
        type: SEND_MESSAGE,
        payload
    }
}

function deleteMessage(timestamp: number): ChatActionTypes {
    return {
      type: DELETE_MESSAGE,
      meta: {
        timestamp
      }
    }
  }

function setVisibilityFilter(filter:VisibilityFilter): SetVisibilityAction{
    return {
      type: SET_VISIBILITY_FILTER,
      filter
    }
}

export {
    sendMessage,
    deleteMessage,
    setVisibilityFilter
}