import React from "react";
import { Link } from "react-router-dom";
// import "./App.scss";

class AddMessage extends React.Component {
  state = {
    message: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.message === "") {
      // alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addMessageHandler(this.state);
    this.setState({ message: "", userId: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.add}>
          <h2>Add Message</h2>
          <div className="field">
            {/* <label>Message:</label> */}
            <textarea
              rows="5"
              cols="55"
              type="text"
              name="message"
              placeholder="Message"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
            />
          </div>
          <div className="hidden">Nothing to say? </div>
          <button className="button">Add message</button>
          <Link to="/">
            <p>Go back</p>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddMessage;
