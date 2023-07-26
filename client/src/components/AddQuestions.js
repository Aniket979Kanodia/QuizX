import React from "react";
import QuizInput from "./QuizInput";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ParentComponent = () => {
  const { state } = useLocation();
  const { id } = state;

  const Navigate = useNavigate();

  const handleSubmit = (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      try {
        console.log("sljbnsiojbcosjc oj osc os coscsj osbcosbo");
        axios
          .post("http://localhost:5000/quizAdmin/addquestion", {
            quiz_id: id,
            question: data[i].question,
            option_1: data[i].options[0],
            option_2: data[i].options[1],
            option_3: data[i].options[2],
            option_4: data[i].options[3],
            correct_answer: data[i].options[data[i].correctOption - 1],
          })
          .then((res) => {})
          .catch((err) => {
            alert("Unable to add questions");
          });
      } catch (err) {
        console.log(err);
      }
    }
    Navigate("/Dashboard");
  };

  return <QuizInput onSubmit={handleSubmit} />;
};

export default ParentComponent;
