import './custom.scss';
import './index.css';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { sendMessage, createContact } from './store/actions';
import { Message } from './store';
import rootReducer from './store/reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import socketIOClient from "socket.io-client";
import { Contact } from './store/types';


const imgContacts = "https://www.alberta.ca/assets/people/disability-advocate-tony-flores_rdax_480x481_75.jpg";
const contacts: Contact[] = [
  {
    id: "0",
    name: "Romulo",
    img: imgContacts,
    room: "Juego",
    info: "Partner"
  },
  {
    id: "1",
    name: "Gabriel",
    img: imgContacts,
    room: "Juego",
    info: "Partner"
  },
  {
    id: "2",
    name: "Corona",
    img: imgContacts,
    room: "Juego",
    info: "Partner"
  },
  {
    id: "3",
    name: "Gamarra",
    img: imgContacts,
    room: "Juego",
    info: "Partner"
  },
];

const store = createStore(rootReducer,(window as any)['__REDUX_DEVTOOLS_EXTENSION__']&& (window as any)['__REDUX_DEVTOOLS_EXTENSION__']());
const socket = socketIOClient("http://192.168.1.102:3001");

// Rellenando store
store.dispatch(createContact(contacts[0]));
store.dispatch(createContact(contacts[1]));
store.dispatch(createContact(contacts[2]));
store.dispatch(createContact(contacts[3]));

socket.on('message', (text: string) => {
  const data: Message = {
    user: "other",
    text,
    timestamp:Date.now(),
    hasBeenRead:false
  };
  store.dispatch(sendMessage(data))
});
render(
  <Provider store={store}>
    <App socket={socket}/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
