import React from 'react'
import { Link } from 'react-router-dom'
import mockCourseAPI from '../API/mockCourseAPI';

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Course = (props) => {
  const course = mockCourseAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!course) {
    return <div>Sorry, but the course was not found</div>
  }
  return (
    <div>
      <h1>{course.title} (#{course.id}) </h1>
      <h2>Instructor: {course.authorId}</h2>
      <Link to='/course'>Back</Link>
    </div>
  )
}

export default Course
