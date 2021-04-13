const QUIZ_URL = 'http://localhost:4000/api/quizzes';

const findQuestionsForQuiz = (qid) =>
    fetch(`${QUIZ_URL}/${qid}/questions`)
        .then(res => res.json())

const questionService = {
    findQuestionsForQuiz
}
export default questionService;