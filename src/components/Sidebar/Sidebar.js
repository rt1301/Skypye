import React from 'react';
import './Sidebar.css';
import User from '../User/User';
export default function Sidebar({contacts}) {
    return (
        <aside className='Sidebar'>
          {contacts.map(contact=>{
              return(
                <User user={contact} key={contact.user_id}></User>
              )
          })}
        </aside>
    )
}
