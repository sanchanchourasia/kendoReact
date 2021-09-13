import "./App.css";
import React, { useState } from "react";
//import { ToastContainer, toast } from "react-toastify";
import { TextField } from "@material-ui/core";
import FormGridComponent from "./formDashboard/FormGridComponent";


function App() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    profile: "",
    email: "",
    contact: "",
  });

  let [resData, setresData] = useState()

  let submitHandler = () => {
    if (
      data.first_name !== "" &&
      data.last_name !== "" &&
      data.profile !== "" &&
      data.email !== "" &&
      data.contact !== ""
    ) {
       setresData ([
        {
          first_name: data.first_name,
          last_name: data.last_name,
          profile: data.profile,
          email: data.email,
          contact: data.contact,
        },
      ]);
      
      alert("Success");
      console.log('f_name - ' + data.first_name);
      console.log('l_name - ' + data.last_name);
      console.log('profile - ' + data.profile);
      console.log('email - ' + data.email);
      console.log('contact - ' + data.contact);
      console.log(resData);
      setData({
        first_name: "",
        last_name: "",
        profile: "",
        email: "",
        contact: "",
      });
      
    } else {
      alert("Pls enter all details");
    }
  };

  

 
  return (
    <div>
      <br />
      <br />
      <div className="gridView">
        <br />
        <TextField
          style={{ marginBottom: "10px" }}
          id="first_name"
          label="First Name"
          value={data.first_name}
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData({ ...data, first_name: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          id="last_name"
          label="Last Name"
          value={data.last_name}
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData({ ...data, last_name: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          id="profile"
          label="Profile"
          value={data.profile}
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData({ ...data, profile: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          id="email"
          label="Email"
          value={data.email}
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          type="text"
          id="contact"
          label="Contact"
          value={data.contact}
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => setData({ ...data, contact: e.target.value })}
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

      <div>
        <FormGridComponent data={resData} />
      </div>
    </div>
  );
}

export default App;