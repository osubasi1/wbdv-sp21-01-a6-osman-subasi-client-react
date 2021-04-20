import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, submitted}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    submitted ={submitted}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    submitted ={submitted}/>
            }
        </div>
    )
}

export default Question;