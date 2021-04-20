import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import {connect} from "react-redux"
import questionService from "../../services/question-service";
import Question from "./questions/qestion";
import {FIND_QUESTIONS_FOR_QUIZ} from "../action-types/question-actions"
import {Link} from "react-router-dom";
import quizService from "../../services/quiz-service";
import { Table} from 'antd'

const Quiz = (
    {
        questions = [],
        findQuestionsForQuiz
    }
) => {
    const [graded, setGraded] = useState(false);
    const {quizId} = useParams();
    const [attempts, setAttempts] = useState([]);
    const submission = (quizId, questions) => {
        quizService.submitQuiz(quizId, questions)
            .then(grade => {
                setAttempts([...attempts, grade.score])
                console.log("grade is:", grade)
            })
    }

    useEffect(() => {
        findQuestionsForQuiz(quizId);
        quizService.findQuizScores(quizId)
            .then(attemps => setAttempts(attemps));

    }, [graded])
    return (
        <div>
            <h2>Quiz</h2>

            <ul className="list-group" >

                <ul>

                    {
                        questions.map((question => {
                            return (
                                <li className="list-group-item">
                                    <Question question={question}
                                              submitted={graded}/>
                                </li>
                            )
                        }))
                    }
                    <button className="btn btn-danger float-right mr-2 mt-2 mb-5"
                            onClick={()=> {
                                setGraded(true);
                            submission(quizId, questions)}}
                            disabled={graded}>
                        Submit
                    </button>
                </ul>
            </ul>

            <ul className="list-group mb-5" style={{width:"250px"}}>
                <li className="list-group-item">
                    <b className="float-left">Attempt</b>
                    <b className="float-right"> Score</b>

                </li>
                {
                    attempts.map(((att, index) => {
                        return (
                            <li className="list-group-item">
                                <p className="float-left">{index}</p>
                                <p className="float-right">{
                                    parseFloat(att.score).toFixed(2)
                                }</p>
                            </li>
                        )
                    }))
                }
            </ul>

        </div>
    )
}

const stpm = (state) => {
    return {
        questions: state.questionReducer.questions
    }
}

const dtpm = (dispatch) => (
    {
        findQuestionsForQuiz: (quizId) => {
            questionService.findQuestionsForQuiz(quizId)
                .then(questions => dispatch({
                                                type: FIND_QUESTIONS_FOR_QUIZ,
                                                questions: questions
                                            }))
        }
    }
)

export default connect(stpm, dtpm)(Quiz);