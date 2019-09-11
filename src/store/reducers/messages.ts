import { SEND_MESSAGE, DELETE_MESSAGE, Message } from "../index";
import { AnyAction } from "redux";


const initialState: Message[] = [];

const messages = (state: Message[]=initialState, action: AnyAction)=>{
    switch(action.type){
        case SEND_MESSAGE:
            return [...state, action.payload];
        case DELETE_MESSAGE:
            return state.filter(
                message => message.timestamp !== action.meta.timestamp
            );
        default:
           return state
    }
}

export default messages;