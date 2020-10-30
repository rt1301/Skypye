import React from "react";
import Empty from "../Empty/Empty";
import ChatWindow from "../ChatWindow/ChatWindow";
import "./Main.css";
export default function Main({ user, activeUserId }) {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId}></Empty>;
    } else {
      return <ChatWindow activeUserId={activeUserId}></ChatWindow>;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
}
