import axios from "axios";

export default axios.create({
  // process.env.baseURL: "http://localhost:3006/",
  baseURL: "https://my-little-message-app.herokuapp.com/",
});
