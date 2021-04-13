const QUIZ_URL = "http://localhost:4000/api"


const findAllQuizzes = () =>
    fetch(`${QUIZ_URL}/quizzes`)
        .then(res => res.json())

const findQuizById =(qid) =>
    fetch(`${QUIZ_URL}/quizzes/${qid}`)
        .then(res => res.json())



const quizService = {
    findAllQuizzes, findQuizzesById: findQuizById,
}

export default quizService;