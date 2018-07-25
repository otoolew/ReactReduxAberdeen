import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './ClientApp/Home/HomePage';
import CoursePage from './ClientApp/Course/CoursePage';
import ManageCoursePage from './ClientApp/Course/ManageCoursePage';
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/courses' component={CoursePage}/>
      <Route path='/course' component={ManageCoursePage}/>
      <Route path='/course/:id' component={ManageCoursePage}/>
    </Switch>
  </main>
)
export default Main;