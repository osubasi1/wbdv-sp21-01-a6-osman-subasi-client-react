import React, { useState } from "react";

const MultipleChoiceQuestion = ({question}) => {

    const [givenAnswer, setGivenAnswer] = useState('')
    const [graded, setGraded] = useState(false);
    const checkAnswer = (answer) =>{
        if(answer === question.correct && graded) {
            return "list-group-item-success";
        }
        else if (answer !== question.correct && graded)
            return "list-group-item-danger";
        return "";
    }
    const checkAnswerCorrect = (answer) =>{
        if(answer === question.correct && graded) {
            return "list-group-item-success";

        }
        return "";
    }

    return (
        <>
            <li>
                <h4>
                    {question.question}
                    {
                        question.correct === givenAnswer && graded &&
                        <i className="fas fa-check float-right"/>
                    }
                    {
                        question.correct !== givenAnswer && graded &&
                        <i className="fas fa-times float-right"/>
                    }
                </h4>
                {
                    !graded &&
                    <ul className="list-group">
                        {
                            question.choices.map((choice) => {
                                return (
                                    <li className={`list-group-item ${checkAnswer(choice)}`}>
                                        <label>
                                            <input type="radio"
                                                   className="radio-button"
                                                   name={question._id}
                                                   onClick={() => setGivenAnswer(choice)}
                                            /> {choice}
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }

                {
                    graded && givenAnswer !== question.correct &&
                    <ul className="list-group">
                        {
                            question.choices.map((choice) => {
                                return (
                                    <li className={`list-group-item ${checkAnswer(choice)}`}>
                                        <label>
                                            <input type="radio"
                                                   className="radio-button"
                                                   name={question._id}
                                                   defaultChecked={givenAnswer === choice}
                                                   onClick={() => setGivenAnswer(choice)}
                                            /> {choice}
                                        </label>
                                        <i className="fas fa-times float-right"/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                {
                    graded && givenAnswer === question.correct &&
                    <ul className="list-group">
                        {
                            question.choices.map((choice) => {
                                return (
                                    <li className={`list-group-item ${checkAnswerCorrect(choice)}`}>
                                        <label>
                                            <input type="radio"
                                                   className="radio-button"
                                                   name={question._id}
                                                   defaultChecked={givenAnswer === choice}
                                                   onClick={() => setGivenAnswer(choice)}
                                            /> {choice}
                                        </label>
                                        <i className="fas fa-check float-right"/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                <br/>
                    Your answer: {givenAnswer}
            </li>
            <br/>
            <div className="row">
                <div >
                    <button className="btn btn-success"
                            onClick={() => setGraded(true)}>
                        Grade
                    </button>
                </div>
                <div className="col-8">
                </div>
            </div>
            <hr/>
        </>
    )
}

export default MultipleChoiceQuestion;