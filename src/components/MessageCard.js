import React from "react";
import { Link } from "react-router-dom";

const MessageCard = (props) => {
  const { id, message, timestamp } = props.message;
  return (
    <div className="message-container">
      <div className="content">
        <div className="message message__date">
          <p className="timestamp">{timestamp}</p>
        </div>
        <div className="message">
          <p> {message}</p>
        </div>
      </div>
      <div className="message__toolLinks">
        <lord-icon
          className="message message__toolLinks--trash"
          src="https:cdn.lordicon.com/gsqxdxog.json"
          trigger="hover"
          stroke="100"
          // scale="60"
          colors="primary:#fa225e,secondary:#ffffff"
          onClick={() => props.clickHandler(id)}
          style={{ cursor: "pointer", paddingRight: "10px" }}
        ></lord-icon>
        <Link to={{ pathname: `/edit`, state: { contact: props.message } }}>
          <lord-icon
            className="message message__toolLinks--edit"
            src="https://cdn.lordicon.com/puvaffet.json"
            trigger="hover"
            stroke="100"
            colors="primary:#ffffff,secondary:#fa225e"
            // style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        </Link>
      </div>
    </div>
  );
};

export default MessageCard;
