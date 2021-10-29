import axios from "axios";

export default axios.create({
  baseURL: "https://my-little-message-app.herokuapp.com/messages",
});
// databaseURL: "https://my-little-message-app.herokuapp.com/",
