import React from 'react'
import store from '../../store';
import Chat from './Chat';
import './ChatWindow.css';
import Header from './Header';
import MessageInput from '../../containers/MessageInput/MessageInput';
import {useMemo} from 'react';
import _ from 'lodash';
export default function ChatWindow({activeUserId}) {
    const state = store.getState();
    const {typing} = state;
    const activeUser = state.contact.contacts[activeUserId];
    const activeMsgs = useMemo(
        () => state.messages[activeUserId], [
        state,
        activeUserId,
        ]);
    const messages = useMemo(() => _.values(activeMsgs), [activeMsgs]);
    return (
        <div className="ChatWindow">
            <Header user={activeUser}></Header>
            <Chat messages={messages}></Chat>
            <MessageInput value={typing}></MessageInput>
        </div>
    )
}
