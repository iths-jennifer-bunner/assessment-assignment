import React from "react";
import { Link } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, message, timestamp } = props.location.state.contact;
    this.state = {
      id,
      message,
      timestamp,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.message === "") {
      return;
    }
    this.props.updateMessageHandler(this.state);
    this.setState({ message: "", timestamp: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.update}>
          <h2>Edit Message</h2>
          <div className="field">
            {/* <label>Message</label> */}
            <textarea
              rows="5"
              cols="55"
              type="text"
              name="message"
              placeholder="Message"
              value={this.state.message}
              onChange={(e) =>
                this.setState({
                  message: e.target.value,
                  timestamp: new Date().toUTCString(),
                })
              }
            />
          </div>
          {/* <div className="field">
            <label>User Id</label>
            <input
              type="text"
              name="userId"
              placeholder="User Id"
              value={this.state.userId}
              onChange={(e) => this.setState({ userId: e.target.value })}
            />
          </div> */}
          <button className="button">Update</button>
          <Link to="/">
            <p>Go back</p>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditContact;
