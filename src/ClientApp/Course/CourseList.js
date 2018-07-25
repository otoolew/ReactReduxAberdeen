import React from 'react';
import CourseListRow from './CourseListRow';
const CourseList = ({ courses }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {
          courses.map(c => (
              <CourseListRow key={c.id} course={c} />       
          ))

        }
      </tbody>
    </table>
  );
};

export default CourseList;
