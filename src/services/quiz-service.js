const QUIZ_URL = "http://localhost:4000/api"


const findAllQuizzes = () =>
    fetch(`${QUIZ_URL}/quizzes`)
        .then(res => res.json())

const findQuizById =(qid) =>
    fetch(`${QUIZ_URL}/quizzes/${qid}`)
        .then(res => res.json())

const submitQuiz = (quizId, questions) =>
    fetch(`${QUIZ_URL}/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        // .then(result => console.log(result))
const findQuizScores = (quizId) =>
    fetch(`${QUIZ_URL}/quizzes/${quizId}/attempts`)
        .then(response => response.json())



const quizService = {
    findAllQuizzes,
    findQuizzesById: findQuizById,
    submitQuiz, findQuizScores
}

export default quizService;