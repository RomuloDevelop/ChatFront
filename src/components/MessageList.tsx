import './MessageList.scss';
import React from 'react';
import {Message} from '../store';

type Props = {
    messages: Message[],
    onClick : (timestamp: number)=>void
}
const MessageList: React.FC<Props> = ({messages, onClick})=>(
<div className="p-5">
  {/* {messages.map((item, index)=><div key={index} className="message received">{item.text}</div>)} */}
  {messages.map((item, index)=>{
    return(<div key={index} className={`message ${item.user==="actual"?"sent":"received"}`}>{item.text}</div>)
  })}
</div>
);

export default MessageList;