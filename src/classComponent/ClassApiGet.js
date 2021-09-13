import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Grid as GridM } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class ClassApiGet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.state = { population: [] };
  }

  componentDidMount() {
    //API1
    //API1
    fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    ).then((response) =>
      response
        .json()
        .then((response) => this.setState({ population: response.data }))
    );
    //API2
    //API2

    fetch("https://reqres.in/api/users").then((response) =>
      response
        .json()
        .then((response) => this.setState({ users: response.data }))
    );
  }

  render() {
    return (
      <div>
        <tr>
          <td>
            {/* <Grid data={this.state.population} style={{ width: "70vw" }}>
              <GridColumn field="ID Nation" />
              <GridColumn field="Nation" />
              <GridColumn field="Year" />
              <GridColumn field="Population" />
            </Grid> */}
          </td>
        </tr>
        <GridM
          style={{
            marginRight: "4rem",
            fontSize: "11px",
            float: "right",
            marginTop: "20px",
          }}
        >
          <h2>
            <Link to={"/postApiClass"} className="navlink">
              PostData
            </Link>
            &nbsp; &nbsp;
            <Link to={"/putApiClass"} className="navlink">
              PutData
            </Link>
            &nbsp; &nbsp;
            <Link to={"/deleteApiClass"} className="navlink">
              DeleteData
            </Link>
          </h2>
        </GridM>

        <br />
        <br />
        <div className="gridView">
          
          <b>(GET) API-2</b>
          <Grid
            data={this.state.users}
            style={{ width: "70vw"}}
          >
            <GridColumn field="id" />
            <GridColumn field="email" />
            <GridColumn field="first_name" />
            <GridColumn field="last_name" />
            <GridColumn field="avatar" />
          </Grid>
        </div>
      </div>
    );
  }
}
