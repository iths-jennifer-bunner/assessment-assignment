import React, { useState, useEffect } from "react";
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

  //retrieve messages
  const retrieveMessages = async () => {
    const response = await api.get("/messages");
    return response.data;
  };

  const addMessageHandler = async (message) => {
    console.log(message);
    const request = {
      id: uuid(),
      url: `localhost:3006/messages/${uuid()}`,
      timestamp: new Date().toLocaleDateString(),
      userId: uuid(),
      ...message,
    };

    const response = await api.post("/messages", request);
    console.log(response);
    setMessages([...messages, response.data]);
  };

  const updateMessageHandler = async (updatedMessage) => {
    console.log("messages: ", messages);
    const response = await api.put(
      `/messages/${updatedMessage.id}`,
      updatedMessage
    );
    console.log("responsedata here: ", response);
    const { id } = response.data;

    setMessages(
      // messages
      // response.data
      messages.map((message) => {
        return message.id === id ? { ...response.data } : message;
      })
    );
  };

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

  useEffect(() => {}, [messages]);
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
