import React from 'react';
import { Link } from 'react-router-dom';
import MessageCard from './MessageCard';

const MessageList = (props) => {
  console.log('message-list: ', props);

  const deleteMessageHandler = (id) => {
    props.getMessageId(id);
  };

  const renderMessageList =
    props.messages &&
    props.messages.map((message) => {
      return (
        <MessageCard
          message={message}
          clickHandler={deleteMessageHandler}
          key={message.id}
        />
      );
    });

  return (
    <div className="container">
      <h2>Doing yoga on the boulders is the best way I to start my mornings</h2>
      <div className="video-container">
        <video
          controls={true}
          muted={true}
          playsInline
          src="/assets/taryn-elliott.mp4"
          className="video-container__video"
        >
          Your browser does not support the video tag.
        </video>
        <h4>Video by Taryn Elliott from Pexels</h4>
      </div>
      <div className="">{renderMessageList}</div>
      <Link to="/add">
        <button className="button">Add Message</button>
      </Link>
    </div>
  );
};

export default MessageList;
