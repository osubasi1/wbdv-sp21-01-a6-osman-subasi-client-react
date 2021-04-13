import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [givenAnswer, setGivenAnswer] = useState()
    const [graded, setGraded] = useState(false);

    const checkAnswer = (studentAnswer) => {
        if (studentAnswer === question.correct && graded) {
            return ["list-group-item-success",
                    <i className="fas fa-check float-right" style={{color: "green"}}/>];
        } else if (studentAnswer !== question.correct && graded)
            return ["list-group-item-danger",
                    <i className="fas fa-times float-right" style={{color: "red"}}/>];
        return ["", ""];
    }
    const checkAnswerCorrect = (studentAnswer) => {
        if (studentAnswer === question.correct && graded) {
            return ["list-group-item-success",
                    <i className="fas fa-check float-right" style={{color: "green"}}/>];
        }
        return ["", ""];
    }
    return (
        <div>

            <h4>
                {question.question}
                {
                    givenAnswer === question.correct && graded &&
                    <i className="fas fa-check float-right" style={{color: "green"}}/>
                }
                {
                    givenAnswer !== question.correct && graded &&
                    <i className="fas fa-times float-right" style={{color: "red"}}/>
                }
            </h4>
            {
                !graded &&
                <ul className="list-group">
                    <li className={"list-group-item"}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}
                                   onClick={() => setGivenAnswer("true")}/>
                            True
                        </label>
                    </li>
                    <li className={"list-group-item"}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}
                                   onClick={() => setGivenAnswer("false")}/>
                            False
                        </label>
                    </li>
                </ul>
            }
            {
                graded && givenAnswer !== question.correct &&
                <ul className="list-group">
                    <li className={`list-group-item ${checkAnswer("true")[0]}`}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}
                                   defaultChecked={givenAnswer === "true"}
                                   onChange={() => setGraded(false)}
                                   onClick={() => setGivenAnswer("true")}/>
                            True
                        </label>
                        {checkAnswer("true")[1]}
                    </li>
                    <li className={`list-group-item ${checkAnswer("false")[0]}`}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}
                                   defaultChecked={givenAnswer === "false"}
                                   onChange={() => setGraded(false)}
                                   onClick={() => setGivenAnswer("false")}/>
                            False
                        </label>
                        {checkAnswer("false")[1]}
                    </li>
                </ul>
            }
            {
                graded && givenAnswer === question.correct &&
                <ul className="list-group">
                    <li className={`list-group-item ${checkAnswerCorrect("true")[0]}`}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}
                                   onChange={() => setGraded(false)}
                                   defaultChecked={givenAnswer === "true"}
                                   onClick={() => setGivenAnswer("true")}/>
                            True
                        </label>
                        {checkAnswerCorrect("true")[1]}
                    </li>
                    <li className={`list-group-item ${checkAnswerCorrect("false")[0]}`}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   defaultChecked={givenAnswer === "false"}
                                   name={question._id}
                                   onClick={() => setGivenAnswer("false")}
                            onChange={() => setGraded(false)}/>
                            False
                        </label>
                        {checkAnswerCorrect("false")[1]}
                    </li>
                </ul>
            }
            <div>
                Your answer: {givenAnswer}
            </div>
            <br/>
            <button className="btn btn-success" onClick={() => setGraded(true)}>
                Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion;