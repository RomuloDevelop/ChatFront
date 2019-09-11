import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createContact } from '../store/actions';
import { Dispatch } from 'redux';
import {Contact} from '../store/types';

const mapDispatchToProps =(dispatch: Dispatch)=>({
   onClick:(payload: Contact)=>{
      dispatch(createContact(payload));
   }
});

const Navbar: React.FC<{onClick:(props: Contact) => void}> = ({onClick}) => (
    <nav className="navbar sticky-top navbar-dark bg-dark">
        <h1 className="navbar-brand">
          <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
          Chat App
        </h1>
        <button type="button" className="btn btn-link" 
          onClick={()=>onClick(
            {
                id: "Contact",
                info: "New Contact",
                name: "Contact",
                img: "ss",
                room: "Any"
            }
        )}>Create User</button>
    </nav>
);

export default connect(
    null,
    mapDispatchToProps
)(Navbar);