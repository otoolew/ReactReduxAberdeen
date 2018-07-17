import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './ClientApp/Home/HomePage';
import CourseRoster from './ClientApp/Course/CourseRoster';
import QuestionList from './ClientApp/Questions/QuestionList';
import CourseForm from './ClientApp/Course/CourseForm';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/course' component={CourseRoster}/>
      <Route path='/addcourse' component={CourseForm}/>
      <Route path='/question' component={QuestionList}/>
    </Switch>
  </main>
)

export default Main;