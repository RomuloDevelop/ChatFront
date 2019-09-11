import React from 'react';

type Props = {
  onClick : (text:string)=>void
}

const SearchInput: React.FC<Props> = ({onClick}) =>{ 
  let inputRef: HTMLInputElement | null;
  const search = ()=>{
    if(inputRef){
      const text = inputRef.value.trim();
      onClick(text);
    }
  }
  return(
    <div className="input-group p-3 bg-light w-100">
      <input ref={(input)=> inputRef=input}
        type="text" 
        className="form-control" 
        placeholder="Search a contact or group" 
        aria-describedby="button-addon2"
        onChange={()=>search()}
      />
    </div>
  );
}

export default SearchInput;