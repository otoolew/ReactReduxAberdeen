import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomePage from './HomePage';
import QuestionList from '../Questions/QuestionList';
import ManageCoursePage from '../Course/ManageCoursePage';
import CoursePage from '../Course/CoursePage';


const Header = () => (
  <header>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>      
          <li><Link to="/questions">Questions</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={HomePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/course/:id" component={ManageCoursePage} />
        <Route path="/questions" component={QuestionList} />
        <Route path="/courses" component={CoursePage} />
      </div>
    </Router>
  </header>
)
export default Header
