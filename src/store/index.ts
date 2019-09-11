export interface Message {
    id?: number
    user: string
    text: string
    hasBeenRead: boolean
    timestamp: number
}

export interface ChatState {
    messages: Message[],
}
//Store
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export enum VisibilityFilter {
    SHOW_ALL = 0,
    SHOW_BY_DATE,
    SHOW_BY_USER
}

interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE
  meta: {
    timestamp: number
  }
}

export interface SetVisibilityAction {
    type: typeof SET_VISIBILITY_FILTER
    filter: VisibilityFilter
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;