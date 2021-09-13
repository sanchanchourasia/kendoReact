import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import axios from "axios";

const ApiPutCall = () => {
  const [data2, setData2] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const url2 = "https://reqres.in/api/users";

  const deleteHandler = async () => {
    console.log(data2.id);
    console.log(data2.email);
    console.log(data2.first_name);
    console.log(data2.last_name);
    if (
      data2.email !== "" &&
      data2.first_name !== "" &&
      data2.last_name !== ""
    ) {
      const ress = await axios.get(url2, {
        id: data2.id,
        email: data2.email,
        first_name: data2.first_name,
        last_name: data2.last_name,
      });
      console.log("ress", ress);

      const res = await axios.put(url2, {
        id: data2.id,
        email: data2.email,
        first_name: data2.first_name,
        last_name: data2.last_name,
      });
      console.log("res", res);
      console.log(res.status);

      if (res.data.response_code !== 201) {
        alert("Update Successful and Status Code is : " + res.status);
      }
    } else {
      alert("Pls enter all details");
    }
  };

  return (
    <div>
      <div className="gridView">
        <br />
        <br />
        <h3>Enter Details to Update Data</h3>
        <br />
        <TextField
          style={{ marginBottom: "10px" }}
          id="email"
          label="email"
          variant="outlined"
          size="small"
          autoComplete="off"
          onChange={(e) => setData2({ ...data2, email: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          id="first_name"
          label="first_name"
          variant="outlined"
          size="small"
          autoComplete="off"
          onChange={(e) => setData2({ ...data2, first_name: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px", height: "1%" }}
          id="last_name"
          label="last_name"
          variant="outlined"
          size="small"
          autoComplete="off"
          onChange={(e) => setData2({ ...data2, last_name: e.target.value })}
        />
        &nbsp; &nbsp;
        <button
          className="btn-primary"
          style={{ height: "40px", fontSize: "15px" }}
          onClick={deleteHandler}
        >
          Update!
        </button>
      </div>
    </div>
  );
};
export default ApiPutCall;
