import React from 'react'
import './User.css'
export default function User({user}) {
    return (
        <div className="User">
            <img src={user.profile_pic} alt="" className="User_pic"/>
            <div className="User_details">
                <p className="User_details-name">{user.name}</p>
                <p className="User_details-status">{user.status}</p>
            </div>
        </div>
    )
}
