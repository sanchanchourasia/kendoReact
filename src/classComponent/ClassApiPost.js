import React from "react";
import { TextField } from "@material-ui/core";

export default class ClassApiPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //users: "email : ''",
      users: { email: "", first_name: "", last_name: "" },
    };
  }

  update(e) {
    //API2
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      }),
    }).then((response) =>
      response
        .json()
        .then((response) => this.setState({ users: response.data }))
    );
  }

  render() {
    return (
      <div>
        <div className="gridView">
          (Api 2)<h3>Enter Details to Add Data </h3>
          <br />
          <TextField
            style={{ marginBottom: "10px" }}
            id="email"
            label="email"
            size="small"
            variant="outlined"
            autoComplete="off"
            onChange={(e) =>
              this.setState({ ...this.state, email: e.target.value })
            }
          />
          <TextField
            style={{ marginBottom: "10px" }}
            id="first_name"
            label="first_name"
            size="small"
            variant="outlined"
            autoComplete="off"
            onChange={(e) =>
              this.setState({ ...this.state, first_name: e.target.value })
            }
          />
          <TextField
            style={{ marginBottom: "10px" }}
            id="last_name"
            label="last_name"
            size="small"
            variant="outlined"
            autoComplete="off"
            onChange={(e) =>
              this.setState({ ...this.state, last_name: e.target.value })
            }
          />
          <button
            className="btn-primary"
            style={{ height: "40px", fontSize: "15px" }}
            onClick={(e) => this.update(e)}
          >
            Add!
          </button>
        </div>
      </div>
    );
  }
}
