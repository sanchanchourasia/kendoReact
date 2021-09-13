import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";


function LoginComponent() {
  const [logindata, setLoginData] = useState({ userid: "", password: "" });
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/welcome/` + logindata.userid; 
    history.push(path);
  }
  const loginHandler = () => {
    if (logindata.userid !== "" && logindata.password !== "") {
      setLoginData([
        {
          userid: logindata.userid,
          password: logindata.password,
        },
      ]);
      alert("Login Success");
      console.log(logindata);
      routeChange();
      setLoginData({
        userid: "",
        password: "",
      });
    } else {
      alert("Pls enter all details");
    }
  };

 

  return (
    <div>
      <div className="gridView">
        <h3>Enter Login Details </h3>
        <br />
        <TextField
          style={{ marginBottom: "10px" }}
          id="userid"
          label="User Id"
          value={logindata.userid}
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) =>
            setLoginData({ ...logindata, userid: e.target.value })
          }
        />
        &nbsp; &nbsp;
        <TextField
          style={{ marginBottom: "10px" }}
          id="password"
          type="password"
          label="Password"
          value={logindata.password}
          size="small"
          variant="outlined"
          autoComplete="off"
          onChange={(e) =>
            setLoginData({ ...logindata, password: e.target.value })
          }
        />
        &nbsp; &nbsp;
        <button
          className="btn-primary"
          style={{ height: "40px", fontSize: "15px" }}
          onClick={loginHandler}
        >
          Login!
        </button>
      </div>
    </div>
  );
}

export default LoginComponent;
