import React, { useState } from "react";

const MultipleChoiceQuestion = ({question}) => {

    const [givenAnswer, setGivenAnswer] = useState('')
    const [graded, setGraded] = useState(false);
    const checkAnswer = (answer) => {
        if (answer === question.correct && graded) {
            return ["list-group-item-success",
                    <i className="fas fa-check float-right" style={{color: "green"}}/>];
        } else if (answer !== question.correct && graded)
            return ["list-group-item-danger",
                    <i className="fas fa-times float-right" style={{color: "red"}}/>];
        return ["", ""];
    }
    const checkAnswerCorrect = (answer) => {
        if (answer === question.correct && graded) {
            return ["list-group-item-success",
                    <i className="fas fa-check float-right" style={{color: "green"}}/>];
        }
        return ["", ""];
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
                                    <li className={`list-group-item ${checkAnswer(choice)[0]}`}>
                                        <label>
                                            <input type="radio"
                                                   className="radio-button"
                                                   name={question._id}
                                                   onClick={() => setGivenAnswer(choice)}
                                            /> {choice}
                                        </label>
                                        {checkAnswer(choice)[1]}
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
                                if (choice === givenAnswer) {
                                    return (
                                        <li className={`list-group-item ${checkAnswer(choice)[0]}`}>
                                            <label>
                                                <input type="radio"
                                                       className="radio-button"
                                                       name={question._id}
                                                       defaultChecked={givenAnswer === choice}
                                                       onClick={() => setGivenAnswer(choice)}
                                                /> {choice}
                                            </label>
                                            <i className="fas fa-times float-right"
                                               style={{color: "red"}}/>
                                        </li>
                                    )
                                } else if (choice === question.correct) {
                                    return (
                                        <li className={`list-group-item ${checkAnswer(choice)[0]}`}>
                                            <label>
                                                <input type="radio"
                                                       className="radio-button"
                                                       name={question._id}
                                                       defaultChecked={givenAnswer === choice}
                                                       onClick={() => setGivenAnswer(choice)}
                                                /> {choice}
                                            </label>
                                            {checkAnswer(choice)[1]}
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li className="list-group-item">
                                            <label>
                                                <input type="radio"
                                                       className="radio-button"
                                                       name={question._id}
                                                       defaultChecked={givenAnswer === choice}
                                                       onClick={() => setGivenAnswer(choice)}
                                                /> {choice}
                                            </label>

                                        </li>
                                    )
                                }
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
                                    <li className={`list-group-item ${checkAnswerCorrect(
                                        choice)[0]}`}>
                                        <label>
                                            <input type="radio"
                                                   className="radio-button"
                                                   name={question._id}
                                                   defaultChecked={givenAnswer === choice}
                                                   onClick={() => setGivenAnswer(choice)}
                                            /> {choice}
                                        </label>
                                        {checkAnswerCorrect(choice)[1]}
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
                <div>
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