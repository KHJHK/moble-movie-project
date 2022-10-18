// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import Main
import Main from "./Main/Main";

// import Movie
import NowPlayingMovie from "./Movie/NowPlayingMovie/NowPlayingMovie";
import UpComingMovie from "./Movie/UpComingMovie/UpComingMovie";
import Movie_MovieInformation from "./Movie/Movie_MovieInformation/Movie_MovieInformation";

// import Member
// import Member_Login from "./Member/Member_Login";
// import Member_SignUp from "./Member/Member_SignUp";
import Member_MyPage from "./Member/Member_MyPage";
import Member_MyPage_MemberInformation from "./Member/Member_MyPage_MemberInformation";

// import Ticketing
import Ticketing from "./Ticketing/Ticketing";

// import Notice_Notice
import Notice_Notice from "./Notice/Notice/Notice_Notice";
import Notice_NoticeInfo from "./Notice/Notice/NoticeInfo/Notice_NoticeInfo";

// import Questions_Questions
import Questions_Questions from "./Notice/Questions/Questions_Questions";
import Questions_QuestionsInfo from "./Notice/Questions/QuestionsInfo/Questions_QuestionsInfo";
import Questions_Write from "./Notice/Questions/Questions_Write";

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
          <Route exact path="/NowPlayingMovie" component={NowPlayingMovie} />
          <Route exact path="/UpComingMovie" component={UpComingMovie} />
          <Route
            exact
            path="/Movie_MovieInformation"
            component={Movie_MovieInformation}
          />
          <Route
            exact
            path="/Movie_MovieInformation/:id"
            component={Movie_MovieInformation}
          />
          {/* Member */}
          {/* <Route exact path="/Member_Login" component={Member_Login} /> */}
          {/* <Route exact path="/Member_Logout" component={Member_Logout} /> */}
          <Route exact path="/Member_MyPage" component={Member_MyPage} />
          {/* <Route exact path="/Member_SignUp" component={Member_SignUp} /> */}
          <Route
            exact
            path="/Member_MyPage_MemberInformation"
            component={Member_MyPage_MemberInformation}
          />
          {/* Ticketing */}
          <Route exact path="/Ticketing" component={Ticketing} />

          {/* Notice_Notice */}
          <Route exact path="/Notice_Notice" component={Notice_Notice} />
          <Route
            exact
            path="/Notice_NoticeInfo/:id"
            component={Notice_NoticeInfo}
          />

          {/* Questions_Questions */}
          <Route
            exact
            path="/Questions_Questions"
            component={Questions_Questions}
          />
          <Route
            exact
            path="/Questions_QuestionsInfo/:id"
            component={Questions_QuestionsInfo}
          />
          <Route exact path="/Questions_Write" component={Questions_Write} />
          {/* <Route
            exact
            path="/Questions_QuestionsInfo_Main"
            component={Questions_QuestionsInfo_Main}
          /> */}

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
