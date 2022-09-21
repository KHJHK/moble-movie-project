// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//import Main
import Main from "./Main/Main";

// import Movie
import Movie_ScreeningMovie from "./Movie/Movie_ScreeningMovie";
import Movie_ToBeScreened from "./Movie/Movie_ToBeScreened";
import Movie_MovieInformation from "./Movie/Movie_MovieInformation.js";

// import Member
import Member_Login from "./Member/Member_Login";
import Member_Logout from "./Member/Member_Logout";
import Member_SignUp from "./Member/Member_SignUp";
import Member_MyPage from "./Member/Member_MyPage";

// import Ticketing
import Ticketing from "./Ticketing/Ticketing";

// import Notice
import Notice from "./Notice/Notice";
import Notice_Questions from "./Notice/Notice_Questions";

// import Theater
import Theater_MovieTheaterLocationInformation from "./Theater/Theater_MovieTheaterLocationInformation";
import Theater_Theater from "./Theater/Theater_Theater";

// import Food
import Food_MovieFood from "./Food/Food_MovieFood";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />

          {/* Movie */}
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
          <Route
            exact
            path="/Movie_MovieInformation"
            component={Movie_MovieInformation}
          />

          {/* Member */}
          <Route exact path="/Member_Login" component={Member_Login} />
          <Route exact path="/Member_Logout" component={Member_Logout} />
          <Route exact path="/Member_MyPage" component={Member_MyPage} />
          <Route exact path="/Member_SignUp" component={Member_SignUp} />

          {/* Ticketing */}
          <Route exact path="/Ticketing" component={Ticketing} />

          {/* Notice */}
          <Route exact path="/Notice" component={Notice} />
          <Route exact path="/Notice_Questions" component={Notice_Questions} />

          {/* Theater */}
          <Route
            exact
            path="/Theater_MovieTheaterLocationInformation"
            component={Theater_MovieTheaterLocationInformation}
          />
          <Route exact path="/Theater_Theater" component={Theater_Theater} />

          {/* Food */}
          <Route exact path="/Food_MovieFood" component={Food_MovieFood} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
