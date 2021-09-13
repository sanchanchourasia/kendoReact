import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Grid as GridM } from "@material-ui/core";
import { Link } from "react-router-dom";

function ApiCall(props) {
  const [population, setPopulation] = useState([]);
  const [users, setUsers] = useState([]);
  // Api Calling _Get data
  // const getData = async () => {
  //   const res = await axios.get(
  //     "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  //   );
  //   setPopulation(res.data.data);
  //   console.log(res.data.data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  //Grid pagin
  const [skip, setSkip] = React.useState(0);
  const [take, setTake] = React.useState(4);

  const onPageChange = (e) => {
    setSkip(e.page.skip);
    setTake(e.page.take);
  };

  //Api Calling _Get data

  const url1 =
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  const url2 = "https://reqres.in/api/users";

  useEffect(() => {
    axios
      .get(url1)
      .then((res) => {
        setPopulation(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Api2**********
  useEffect(() => {
    axios
      .get(url2)
      .then((res) => {
        setUsers(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <br />
      <br />
      <GridM style={{
            marginRight: "4rem",
            fontSize: "11px",
            float: "right",
            marginTop: "0px",
            
          }}>
        <h2>
          <Link to={"/postApi"} className="navlink">
            PostApi
          </Link>
          &nbsp; &nbsp;
          <Link to={"/putApi"} className="navlink">
            PutData
          </Link>
          &nbsp; &nbsp;
          <Link to={"/deleteApi"} className="navlink">
            DeleteData
          </Link>
        </h2>
      </GridM>
      <div className="gridView">
        <b>(GET) API 1</b>
        <Grid
          data={population.slice(skip, skip + take)}
          style={{ width: "70vw" }}
          pageable={true}
          skip={skip}
          take={take}
          onPageChange={onPageChange}
          total={population.length}
        >
          <GridColumn field="Nation" />
          <GridColumn field="Population" />
          <GridColumn field="Year" />
        </Grid>
        {/* ************POST API************ */}
        {/* <br/><GridM>
          <h1>
            <Link to={"/postApi"} className="navlink">
              PostApi
            </Link>
          </h1>
        </GridM> */}
        <div>
          {/* ************Api2**** */}
          <br />
          <br />
          <br />
          <b>(GET) API 2</b>
          <Grid
            data={users.slice(skip, skip + take)}
            style={{ width: "70vw" }}
            pageable={true}
            skip={skip}
            take={take}
            onPageChange={onPageChange}
            total={users.length}
          >
            <GridColumn field="id" />
            <GridColumn field="email" />
            <GridColumn field="first_name" />
            <GridColumn field="last_name" />
            <GridColumn field="avatar" />
          </Grid>
          <br />
        </div>
      </div>
    </div>
  );
}

export default ApiCall;