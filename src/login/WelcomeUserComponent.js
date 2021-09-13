import React from "react";
import { useHistory } from "react-router-dom";

function WelcomeUserComponent() {
  const history = useHistory();
  const routeChangee = () => {
    let path = `/login`;
    history.push(path);
  };
  const logout = () => {
    alert("Logout Success");
    routeChangee();
  };
  return (
    <div>
      <button
        className="btn-primary"
        style={{
          padding: "5px",
          width: "5rem",
          backgroundColor: "lightsteelblue",
          color: "inherit",
          border: "1px solid grey",
          height: "30px",
          fontSize: "15px",
          margin: "40px 250px",
          float: "right",
        }}
        onClick={logout}
      >
        Logout!
      </button>

      <div
        style={{
          margin: "40px 250px",
          float:'left'
        }}
      >
        <i>Welcome to DashBoard</i>
      </div>
    </div>
  );
}

export default WelcomeUserComponent;
