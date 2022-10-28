// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//import Main
import Main from "./Main/Main";

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

// ============ AdminMain ============
import AdminMain from "./AdminPage/AdminMain";
import AdminMember from "./AdminPage/AdminMember/AdminMember";
import AdminTheater from "./AdminPage/AdminTheater/AdminTheater";
import AdminMovie from "./AdminPage/AdminMovie/AdminMovie";
// AdminNotice
import AdminNotice from "./AdminPage/AdminNotice/AdminNotice";
import manage_notice_add from "./AdminPage/AdminNotice/add/manage_notice_add";
import manage_notice_detail from "./AdminPage/AdminNotice/manage_notice_detail";
import manage_notice_update from "./AdminPage/AdminNotice/update/manage_notice_update";
// AdminQuestion
import manage_question_list from "./AdminPage/AdminQuestion/manage_question_list";
import manage_answer_add from "./AdminPage/AdminQuestion/add/manage_answer_add";
import manage_question_detail from "./AdminPage/AdminQuestion/manage_question_detail";
import manage_answer_update from "./AdminPage/AdminQuestion/update/manage_answer_update";
import manage_answer_delete from "./AdminPage/AdminQuestion/delete/manage_answer_delete";

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
          <Route exact path="/AdminMain" component={AdminMain} />
          <Route exact path="/AdminMember" component={AdminMember} />
          <Route exact path="/AdminTheater" component={AdminTheater} />
          <Route exact path="/AdminMovie" component={AdminMovie} />

          {/* Notice */}
          <Route exact path="/AdminNotice" component={AdminNotice} />

          <Route
            exact
            path="/manage_notice_add"
            component={manage_notice_add}
          />
          <Route
            exact
            path="/manage_notice_detail/:id"
            component={manage_notice_detail}
          />
          <Route
            exact
            path="/manage_notice_update/:id"
            component={manage_notice_update}
          />

          {/* Question */}
          <Route
            exact
            path="/manage_question_list"
            component={manage_question_list}
          />

          <Route
            exact
            path="/manage_question_detail/:id"
            component={manage_question_detail}
          />

          <Route
            exact
            path="/manage_answer_add/:id"
            component={manage_answer_add}
          />

          <Route
            exact
            path="/manage_answer_update/:id"
            component={manage_answer_update}
          />
          <Route
            exact
            path="/manage_answer_delete/:id"
            component={manage_answer_delete}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
