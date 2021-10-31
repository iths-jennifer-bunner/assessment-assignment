import React from "react";
import { Link } from "react-router-dom";

class AddMessage extends React.Component {
  state = {
    message: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.message === "") {
      return;
    }
    this.props.addMessageHandler(this.state);
    this.setState({ message: "", userId: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <form className="form formBlobBody" onSubmit={this.add}>
          <h2>Add Message</h2>
          <div className="field ">
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
            />
          </div>
          <div className="smallBlob">
            <div className="smallCircle"></div>
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
