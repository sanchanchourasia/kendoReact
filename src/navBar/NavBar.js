import React from "react";
import "../App.css";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import KendoGrid from "../mainSection/ColumnGrid";
import ApiCall from "../mainSection/ApiCall";
import Postapi from "../mainSection/ApiPostCall";
import ApiDeleteCall from "../mainSection/ApiDeleteCall";
import ApiPutCall from "../mainSection/ApiPut";
import App from "../App";
import ClassApiGet from "../classComponent/ClassApiGet";
import ClassApiPost from "../classComponent/ClassApiPost";
import CardComponent from "../mainSection/CardComponent";
import LoginComponent from "../login/LoginComponent";
import WelcomeUserComponent from "../login/WelcomeUserComponent";

const NavBar = () => {
  return (
    <div>
      <Router>
        <AppBar
          className="navBar"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <AppBarSection className="Nav-left">
            <h1>React</h1>
          </AppBarSection>
          <AppBarSection className="Nav-right">
            <Link to={"/"} className="navlink">
              Home
            </Link>
            <Link to={"/form"} className="navlink">
              Form
            </Link>

            <Link to={"/kendoGrid"} className="navlink">
              KendoGrid
            </Link>

            <Link to={"/getApi"} className="navlink">
              Api
            </Link>

            <Link to={"/cards"} className="navlink">
              Cards
            </Link>
            <Link to={"/login"} className="navlink">
              Login
            </Link>
          </AppBarSection>
        </AppBar>
        <hr />
        <AppBar
          className="navBar"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {/* // using class components */}
          <AppBarSection className="Nav-left">
            <h2>Using Class Component</h2>
          </AppBarSection>
          <AppBarSection className="Nav-right">
            <Link to={"/getApiUsingClass"} className="navlink">
              ClassApi
            </Link>
          </AppBarSection>
        </AppBar>

        <Switch>
          <Route path="/form" component={App} />
          <Route path="/kendoGrid" component={KendoGrid} />
          <Route path="/getApi" component={ApiCall} />
          <Route path="/postApi" component={Postapi} />
          <Route path="/deleteApi" component={ApiDeleteCall} />
          <Route path="/putApi" component={ApiPutCall} />
          <Route path="/cards" component={CardComponent} />
          <Route path="/getApiUsingClass" component={ClassApiGet} />
          <Route path="/postApiClass" component={ClassApiPost} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/welcome/" component={WelcomeUserComponent} />
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
