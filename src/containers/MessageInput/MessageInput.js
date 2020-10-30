import React from 'react'
import { setTypingValue, sendMessage } from '../../actions'
import store from '../../store'
import './MessageInput.css'
export default function MessageInput({value}) {
    const handleChange = (e)=>{
        store.dispatch(setTypingValue(e.target.value));
    }
    return (
            <form className="Message">
                <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
                />
            </form>
       
    )
}
