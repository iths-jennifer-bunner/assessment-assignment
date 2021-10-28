import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "./api/messages";
import "./App.scss";
import Header from "./components/Header";
import MessageList from "./components/MessageList";
import AddMessage from "./components/AddMessage";
import EditMessage from "./components/EditMessage";

function App() {
  const [messages, setMessages] = useState([]);

  //-----------GET "post"-----------
  const retrieveMessages = async () => {
    const response = await api.get("/messages?_sort=timestamp&_order=desc");
    return response.data;
  };

  const addMessageHandler = async (message) => {
    console.log(message);
    const id = uuid();
    const request = {
      id: id,
      url: `localhost:3006/messages/` + id,
      timestamp: new Date().toUTCString(),
      userId: uuid(),
      ...message,
    };

    //-----------POST "post"-----------
    const response = await api.post("/messages", request);
    console.log(response);
    setMessages([...messages, response.data]);
  };

  //-----------PUT (edit) "post"-----------

  const updateMessageHandler = useCallback(
    async (updatedMessage) => {
      // console.log("messages: ", messages);
      const response = await api.put(
        `/messages/${updatedMessage.id}`,
        updatedMessage
      );
      const { id } = response.data;
      setMessages(
        messages.map((message) => {
          return message.id === id ? { ...response.data } : message;
        })
      );
    },
    [messages]
  );

  //-----------DELETE "post"-----------
  const removeMessageHandler = async (id) => {
    await api.delete(`/messages/${id}`);
    const newMessageList = messages.filter((message) => {
      return message.id !== id;
    });

    setMessages(newMessageList);
  };

  useEffect(() => {
    const getAllMessages = async () => {
      const allMessages = await retrieveMessages();
      if (allMessages) setMessages(allMessages);
    };
    getAllMessages();
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <MessageList
                {...props}
                messages={messages}
                getMessageId={removeMessageHandler}
                {...props}
                addMessageHandler={addMessageHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddMessage {...props} addMessageHandler={addMessageHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditMessage
                {...props}
                updateMessageHandler={updateMessageHandler}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
