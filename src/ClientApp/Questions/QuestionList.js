import React from 'react'
import QuestionAPI from '../API/QuestionAPI';
import LikeButton from '../LikeContent/LikeButton';

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const QuestionList = (props) => (
  <div>
    <ul>
      {
        QuestionAPI.all().map(q => (
          <li key={q.questionId}>
            Author: {q.questionAuthor}
            <br></br>
            Question: {q.questionBody}  
            <br></br>
            Likes: {q.questionLikes} 
            <br></br>
            <LikeButton count={q.questionLikes} />            
            <br></br>
            --------------------------
          </li>
                    
        ))
      }
    </ul>

  </div>
)

export default QuestionList