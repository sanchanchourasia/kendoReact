import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import axios from "axios";

const Postapi = () => {
  const [data, setData] = useState({ nation: "", population: "", year: "" });
  const [data2, setData2] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const url1 = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  const url2 = "https://reqres.in/api/users";

  const submitHandler = async () => {
    console.log(data.nation);
    console.log(data.population);
    console.log(data.year);
    if (data.nation !== "" && data.population !== "" && data.year !== "") {
      const res = await axios.post(url1, {
        nation: data.nation,
        population: data.population,
        year: data.year,
      });
      console.log("res", res);
      console.log(res.status);
      if (res.data.response_code !== 201) {
        alert("successful and status code is:" + res.status);
      } 
    } else {
      alert("Pls enter all details");
    }
  };
  // ***************Api2*
  const submitHandler2 = async () => {
    console.log(data2.id);
    console.log(data2.email);
    console.log(data2.first_name);
    console.log(data2.last_name);
    if (
      //data2.id !== "" &&
      data2.email !== "" &&
      data2.first_name !== "" &&
      data2.last_name !== ""
    ) {
      const res = await axios.post(url2, {
        id: data2.id,
        email: data2.email,
        first_name: data2.first_name,
        last_name: data2.last_name,
      });
      console.log("res", res);
      console.log(res.status);

      if (res.data.response_code !== 201) {
        alert("Post Successful and Status Code is : " + res.status);
      }
    } else {
      alert("Pls enter all details");
    }
  };

  return (
    <div>
      <div className="gridView">
      (Api 1)<h3>Enter Details to Add Data </h3>
        <br />
        <TextField
          style={{ marginBottom: "10px" }}
          id="nation"
          label="nation"
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData({ ...data, nation: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          id="population"
          label="population"
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData({ ...data, population: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          id="year"
          label="year"
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData({ ...data, year: e.target.value })}
        />
        &nbsp; &nbsp;
        <button
          className="btn-primary"
          style={{ height: "40px", fontSize: "15px" }}
          onClick={submitHandler}
        >
          Add!
        </button>
      </div>

      <div className="gridView">
      (Api 2)<h3>Enter Details to Add Data  </h3>
        <br />
        {/* <TextField
          style={{ marginBottom: "10px" }}
          id="id"
          label="id"
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData2({ ...data2, id: e.target.value })}
        />
        &nbsp; &nbsp; */}
        <TextField
          style={{ marginBottom: "10px" }}
          id="email"
          label="email"
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData2({ ...data2, email: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          id="first_name"
          label="first_name"
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData2({ ...data2, first_name: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          id="last_name"
          label="last_name"
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData2({ ...data2, last_name: e.target.value })}
        />
        &nbsp; &nbsp;
        <button
          className="btn-primary"
          style={{ height: "40px", fontSize: "15px" }}
          onClick={submitHandler2}
        >
          Add!
        </button>
      </div>
    </div>
  );
};
export default Postapi;
