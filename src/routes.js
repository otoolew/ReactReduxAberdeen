import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import App from './App';
import HomePage from './ClientApp/Home/HomePage';
import CoursesPage from './ClientApp/Course/CoursePage';
import ManageCoursePage from './ClientApp/Course/ManageCoursePage';

export default (
    <Route path="/" component={App}>
        <Route path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/course/:id" component={ManageCoursePage} />
    </Route>
);
