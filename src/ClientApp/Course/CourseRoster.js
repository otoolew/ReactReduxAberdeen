import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CourseCatalog from './CourseCatalog';
import Course from './Course';

// The CourseRoster component matches one of two different routes
// depending on the full pathname
const CourseRoster = () => (
  <Switch>
    <Route exact path='/course' component={CourseCatalog}/>
    <Route path='/course/:number' component={Course}/>
  </Switch>
)

export default CourseRoster
