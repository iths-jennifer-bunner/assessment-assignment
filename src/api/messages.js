import axios from "axios";
const PORT = process.env.PORT || 3006;

export default axios.create({
  baseURL: "https://my-little-message-app.herokuapp.com:" + PORT,
});
