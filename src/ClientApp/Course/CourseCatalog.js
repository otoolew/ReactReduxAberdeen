import React from 'react'
import CourseAPI from '../API/CourseAPI'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const CourseCatalog = () => (
  <div>
    <ul>
      {
        CourseAPI.all().map(c => (
          <li key={c.number}>
            <Link to={`/course/${c.number}`}>{c.title}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default CourseCatalog