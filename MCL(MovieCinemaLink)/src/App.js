import errorPage from './Main/errorPage';
import Authentication from './utils/Authentication';

// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// .css
import "./App.css";

// ============ UserPage ============
import Main from "./Main/Main";
import error from "./Main/errorPage";

// import Movie
import NowPlayingMovie from "./Movie/NowPlayingMovie/NowPlayingMovie";
import UpComingMovie from "./Movie/UpComingMovie/UpComingMovie";
import Movie_MovieInformation from "./Movie/Movie_MovieInformation/Movie_MovieInformation";
import Movie_MovieInformationUpComing from "./Movie/Movie_MovieInformation/Movie_MovieInfomationUpComing";

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

// import Questions
import Questions_Questions from "./Notice/Questions/Questions_Questions";
import Questions_QuestionsInfo from "./Notice/Questions/QuestionsInfo/Questions_QuestionsInfo";
import Questions_Write from "./Notice/Questions/Write/Questions_Write";
import Questions_Update from "./Notice/Questions/Update/Questions_Update";
import Questions_modal_Create from "./Notice/Questions/modal/Questions_modal_Create";

// import Theater
import Theater_MovieTheaterLocationInformation from "./Theater/Theater_MovieTheaterLocationInformation";
import Theater_Theater from "./Theater/Theater_Theater";

// import Food
import Food_MovieFood from "./Food/Food_MovieFood";

// ============ ManagePage ============
import AdminMain from "./AdminPage/AdminMain";
import AdminMember from "./AdminPage/AdminMember/AdminMember";
import AdminMovie from "./AdminPage/AdminMovie/AdminMovie";
// Manage_Notice
import Manage_Notice from "./AdminPage/AdminNotice/Manage_Notice";
import Manage_Notice_Add from "./AdminPage/AdminNotice/add/Manage_Notice_Add";
import Manage_Notice_Detail from "./AdminPage/AdminNotice/Manage_Notice_Detail";
import Manage_Notice_Update from "./AdminPage/AdminNotice/update/Manage_Notice_Update";
// AdminQuestion
import Manage_Question from "./AdminPage/AdminQuestion/Manage_Question";
import Manage_Answer_Add from "./AdminPage/AdminQuestion/add/Manage_Answer_Add";
import Manage_Question_Detail from "./AdminPage/AdminQuestion/Manage_Question_Detail";
import Manage_Answer_Update from "./AdminPage/AdminQuestion/update/Manage_Answer_Update";

function App() {
  // const localStorage = window.localStorage;
  // const decoded = jwtDecode(JSON.stringify(localStorage.getItem("token")));
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/error" component={error} />
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
          <Route
            exact
            path="/Movie_MovieInformationUpComing"
            component={Movie_MovieInformationUpComing}
          />
          <Route
            exact
            path="/Movie_MovieInformationUpComing/:id"
            component={Movie_MovieInformationUpComing}
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
            path="/Questions_modal_Create"
            component={Questions_modal_Create}
          />
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
          <Route
            exact
            path="/Questions_Update/:question_id"
            component={Questions_Update}
          />
          {/* Theater */}
          <Route
            exact
            path="/Theater_MovieTheaterLocationInformation"
            component={Theater_MovieTheaterLocationInformation}
          />
          <Route exact path="/Theater_Theater" component={Theater_Theater} />
          {/* Food */}
          <Route exact path="/Food_MovieFood" component={Food_MovieFood} />
          {/* ====== AdminMain ====== */}
          <Route exact path="/error" component={errorPage} />

          {/* <Route exact path={jwtDecode(JSON.stringify(localStorage.getItem("token"))).member_auth="ADMIN" ? "/AdminMain" : "/error"} component={AdminMain} /> */}


          <Route exact path="/AdminMain" component={AdminMain} />

          <Route exact path="/AdminMember" component={AdminMember} />
          <Route exact path="/AdminMovie" component={AdminMovie} />

          {/* Notice */}
          <Route exact path="/Manage_Notice" component={Manage_Notice} />

          <Route
            exact
            path="/Manage_Notice_Add"
            component={Manage_Notice_Add}
          />
          <Route
            exact
            path="/Manage_Notice_Detail/:id"
            component={Manage_Notice_Detail}
          />
          <Route
            exact
            path="/Manage_Notice_Update/:id"
            component={Manage_Notice_Update}
          />

          {/* Question */}
          <Route exact path="/Manage_Question" component={Manage_Question} />

          <Route
            exact
            path="/Manage_Question_Detail/:id"
            component={Manage_Question_Detail}
          />

          <Route
            exact
            path="/Manage_Answer_Add/:id"
            component={Manage_Answer_Add}
          />

          <Route
            exact
            path="/Manage_Answer_Update/:id"
            component={Manage_Answer_Update}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
