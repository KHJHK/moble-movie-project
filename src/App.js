// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Main from "./Main/Main";
import Movie_ScreeningMovie from "./movie/Movie_ScreeningMovie";
import Movie_ToBeScreened from "./movie/Movie_ToBeScreened";

// import Member
import Member_Login from "./Member/Member_Login";
import Member_Logout from "./Member/Member_Logout";
import Member_MyPage from "./Member/Member_MyPage";
import Member_SignUp from "./Member/Member_SignUp";

// import Ticketing
import Ticketing from "./Ticketing/Ticketing";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/Movie_ScreeningMovie"
            component={Movie_ScreeningMovie}
          />
          <Route
            exact
            path="/Movie_ToBeScreened"
            component={Movie_ToBeScreened}
          />

          {/* Member */}
          <Route exact path="/Member_Login" component={Member_Login} />
          <Route exact path="/Member_Logout" component={Member_Logout} />
          <Route exact path="/Member_MyPage" component={Member_MyPage} />
          <Route exact path="/Member_SignUp" component={Member_SignUp} />

          {/* Ticketing */}
          <Route exact path="/Ticketing" component={Ticketing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
