import React from 'react'
import { Link } from 'react-router-dom'
import CourseAPI from '../API/CourseAPI';

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Course = (props) => {
  const course = CourseAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!course) {
    return <div>Sorry, but the course was not found</div>
  }
  return (
    <div>
      <h1>{course.title} (#{course.number}) </h1>
      <h2>Instructor: {course.instructor}</h2>
      <Link to='/course'>Back</Link>
    </div>
  )
}

export default Course
