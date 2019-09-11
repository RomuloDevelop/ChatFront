import React from 'react';
import { Contact } from '../store/types';
import SearchInputBox from '../containers/SearchInputBox';


const imgGroup = "https://petrieflom.law.harvard.edu/images/made/82e033b5d85a88b0/Cohen2015_people_300_300_85.jpg";

const data = {
  groups: [
    {
      img: imgGroup,
      title: "Job",
    },
    {
      img: imgGroup,
      title: "Friends",
    },
    {
      img: imgGroup,
      title: "Family",
    },
  ]
}
const Groups = ({title, img, index}: {title: string, img: string, index: number})=>(
  <li className="list-group-item d-flex flex-row pl-5 pr-5">
    <img className="rounded-circle img-thumnail picture mr-3" src={img} alt={`group${index}`}/>
    <div className="d-flex flex-column">
      <h6>{title}</h6>
      <p className = "lead">A group for fun</p>
    </div>
  </li>
);

const Contacts = ({name, img, index}: {name: string, img: string, index: number})=>(
  <li className="list-group-item d-flex flex-row pl-5 pr-5">
    <img className="rounded-circle img-thumnail picture mr-3" src={img} alt={`contact${index}`}/>
      <h6>{name}</h6>
  </li>
);

const ContactsFiltered = (contacts: Contact[], filter: string)=>{
  const filtered = contacts.filter(item => {
    const regex = new RegExp(filter);
    return regex.test(item.name);
  })
  return filtered.map((item, index)=>(
    <Contacts key={index} name={item.name} img={item.img} index={index}/>
  ));
};

type Props = {
  
    contacts: Contact[],
    filter: string
  
  onClick: (id: string) => void
}

const ChatList: React.FC<Props> = ({contacts, filter})=>{
  return (
  <div>
    <h6 className="m-2 h5">Groups</h6>
    <ul className="list-group">
      {data.groups.map((item, index) => (
        <Groups title={item.title} img={item.img} index={index}/>
      ))}
    </ul>
    <div className="d-flex justify-content-row align-items-center">
      <h6 className="m-2 h5">Contacts</h6>
      <SearchInputBox/>
    </div>
    <ul className="list-group flex-shrink-0">
      {ContactsFiltered(contacts,filter)}
    </ul>
  </div>
);
}
export default ChatList;
