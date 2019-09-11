import './MessageForm.scss';
import React from 'react';
import {Message} from '../store';

type Props = {
    messages: Message[],
    onClick : (payload:Message)=>void
}

function move(elem: Element | null) {
  // const down = (elem.scrollHeight - elem.clientHeight - elem.scrollTop)/10
  // const result = elem.scrollHeight - elem.clientHeight;
  // let progress = elem.scrollTop;

  // const id = setInterval(()=>{
  //   progress += down;
  //   elem.scrollTop= progress;// show frame
  //   console.log(result,elem.scrollTop, down);
  //   if (elem.scrollTop === result) { // check finish condition
  //     console.log('cleared');
  //       //elem.scrollTop = elem.scrollHeight - elem.clientHeight;

  //       clearInterval(id)
  //   }
  // }, 1) // draw every 10ms
  if(elem != null){
    elem.scrollTop = elem.scrollHeight;
  } 
}

const MessageForm: React.FC<Props> = ({messages, onClick})=>{
  let inputRef: HTMLInputElement | null;
  const send = ()=>{

    if(inputRef){
      onClick({
        user: "actual",
        text:inputRef.value,
        timestamp:Date.now(),
        hasBeenRead:false
      });
      inputRef.value = "";
      inputRef.focus();
      const time = setInterval(()=>move(document.getElementById("messageContainer")),10);
      setTimeout(()=>clearInterval(time),1000);
    }
  }
  return(
    <div className="input-group p-3 bg-dark w-100">
      <input ref={(input)=> inputRef=input}
        type="text" 
        className="form-control" 
        placeholder="Write message" 
        aria-describedby="button-addon2"
        onChange={()=>{
          move(document.getElementById("messageContainer"));
        }}
        onKeyPress={(event)=>{
          if(event.key==='Enter')
            send();
        }}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2"
        onClick={()=>send()}>Send</button>
      </div>
    </div>
  );
}

export default MessageForm;