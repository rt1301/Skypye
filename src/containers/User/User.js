import React from 'react'
import store from '../../store'
import {setActiveUserId} from '../../actions/index';
import './User.css'
export default function User({user}) {
    const handleClickUser = ()=>{
        store.dispatch(setActiveUserId(user.user_id));
    }
    return (
        <div className="User" onClick={handleClickUser}>
            <img src={user.profile_pic} alt="" className="User_pic"/>
            <div className="User_details">
                <p className="User_details-name">{user.name}</p>
                <p className="User_details-status">{user.status}</p>
            </div>
        </div>
    )
}
