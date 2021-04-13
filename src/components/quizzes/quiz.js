import React, {useEffect} from 'react'
import {useParams} from "react-router";
import {connect} from "react-redux"
import questionService from "../../services/question-service";
import Question from "./questions/qestion";
import {FIND_QUESTIONS_FOR_QUIZ} from "../action-types/question-actions"
import {Link} from "react-router-dom";

const Quiz = (
    {
        questions = [],
        findQuestionsForQuiz
    }
) => {

    const {quizId} = useParams();

    useEffect(() => {
        findQuestionsForQuiz(quizId)
    }, [])
    return (
        <div>
            <h2>Quiz</h2>
            <ul className="list-group">
                <ol>
                    {
                        questions.map((question => {
                            return (
                                <li className="list-group-item">
                                    <Question question={question}/>

                                </li>
                            )
                        }))
                    }
                </ol>
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