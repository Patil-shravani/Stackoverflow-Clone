import React from "react";
import Questions from "./Questions";
const QuestionList = ({ questionsList ,theme}) => {
  return (
    <div className={`${theme}`}>
      {questionsList.map((question) => (
        <Questions question={question} key={question._id} theme={theme} />
      ))}
    </div>
  );
};

export default QuestionList;
