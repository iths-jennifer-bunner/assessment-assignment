import React from "react";
import { Link } from "react-router-dom";
import MessageCard from "./MessageCard";
// import "./App.scss";

const MessageList = (props) => {
  console.log("message-list: ", props);

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
          width="1000"
          controls={true}
          // autoPlay={true}
          muted={true}
          playsInline
          src="/assets/taryn-elliott.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <p>Video by Taryn Elliott from Pexels</p>
      </div>
      <div className="">{renderMessageList}</div>

      {/* <div id="pagination-control" className="pagination-container">
        <button id="first" className="pagination-button">
          ⇇
        </button>
        <button id="back" className="pagination-button">
          ←
        </button>
        <div id="page-number" className="pagination-button"></div>
        <button id="forward" className="pagination-button">
          →
        </button>
        <button id="last" className="pagination-button">
          ⇉
        </button>
      </div> */}

      <Link to="/add">
        <button className="button">Add Message</button>
      </Link>
    </div>
  );
};

export default MessageList;
