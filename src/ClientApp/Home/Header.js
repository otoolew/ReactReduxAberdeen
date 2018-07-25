import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomePage from './HomePage';
import QuestionList from '../Questions/QuestionList';
import CourseForm from '../Course/CourseForm';
import CoursePage from '../Course/CoursePage';


const Header = () => (
  <header>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/addcourse">Manage Courses</Link></li>
          <li><Link to="/questions">Questions</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursePage} />
        <Route path="/addcourse" component={CourseForm} />
        <Route path="/questions" component={QuestionList} />
      </div>
    </Router>
  </header>
)
export default Header
