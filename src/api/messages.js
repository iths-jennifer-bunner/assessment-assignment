import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3006/",
});
// databaseURL: "https://my-little-message-app.herokuapp.com/",
