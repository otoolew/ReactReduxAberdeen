
// A simple development data API that will be used to get the data for our components. 
const QuestionAPI = {
    questions: [
        { questionId: 1, questionAuthor: "Joe Schmoe", questionBody: "How many comp sci course at pitt?", questionLikes: 4 },
        { questionId: 2, questionAuthor: "Chris Johnson", questionBody: "How many likes are too many?", questionLikes: 7 },
        { questionId: 3, questionAuthor: "Mary McMillan", questionBody: "What is the state?", questionLikes: 56 },
        { questionId: 4, questionAuthor: "Pat Sayjack", questionBody: "Who is president?", questionLikes: 5 },
    ],
    all: function () { return this.questions },
    get: function (id) {
        const isQuestion = c => c.questionId === id
        return this.questions.find(isQuestion)
    }
}
export default QuestionAPI;
