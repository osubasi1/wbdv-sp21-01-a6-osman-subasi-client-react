import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [givenAnswer, setGivenAnswer] = useState()
    const [graded, setGraded] = useState(false);

    const checkAnswer = (studentAnswer) =>{
        if(studentAnswer === question.correct && graded) {
            return "list-group-item-success";
        }
             else if (studentAnswer !== question.correct && graded)
                return "list-group-item-danger";
            return "";
        }
    const checkAnswerCorrect = (studentAnswer) =>{
        if(studentAnswer === question.correct && graded) {
            return "list-group-item-success";
        }
        return "";
    }
    return (
        <div>

            <h4>
                {question.question}
                {
                    givenAnswer === question.correct && graded &&
                    <i className="fas fa-check float-right" style={{color:"green"}}/>
                }
                {
                    givenAnswer !== question.correct && graded &&
                    <i className="fas fa-times float-right" style={{color:"red"}}/>
                }
            </h4>
            {
                !graded &&
                <ul className="list-group">
                    <li className={"list-group-item" }>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}
                                   onClick={() => setGivenAnswer("true")}/>
                            True
                        </label>
                    </li>
                    <li className={"list-group-item" }>
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
                    <li className={`list-group-item ${checkAnswer("true")}`}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}
                                   defaultChecked={givenAnswer === "true"}
                                   onClick={() => setGivenAnswer("true")}/>
                            True
                        </label>

                    </li>
                    <li className={`list-group-item ${checkAnswer("false")}`}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}
                                   defaultChecked={givenAnswer === "false"}
                                   onClick={() => setGivenAnswer("false")}/>
                            False
                        </label>
                    </li>
                </ul>
            }
            {
                graded && givenAnswer === question.correct &&
                <ul className="list-group">
                    <li className={`list-group-item ${checkAnswerCorrect("true")}`}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   name={question._id}

                                   defaultChecked={givenAnswer === "true"}
                                   onClick={() => setGivenAnswer("true")}/>
                            True
                        </label>
                        <i className="fas fa-check float-right"/>
                    </li>
                    <li className={`list-group-item ${checkAnswerCorrect("false")}`}>
                        <label>
                            <input type="radio"
                                   className="mda-padded-radio-button"
                                   defaultChecked={givenAnswer === "false"}
                                   // checked={givenAnswer === "false"}
                                   name={question._id}
                                   onClick={() => setGivenAnswer("false")}/>
                            False
                        </label>
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