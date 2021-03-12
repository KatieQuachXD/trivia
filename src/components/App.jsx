import React, { Component, useState } from "react";
import "../css/App.css";
import NextQuestion from "./NextQuestion/NextQuestion";
import Answer from "./Answer/Answer";
import Question from "./Question/Question";
import data from "../sample_data.json";
import { Input } from "@material-ui/core";

function App() {
  var questionNumber = 0;
  const [correctAnswer, setCorrectAnswer] = useState("");
  return (
    <div className="app">
      Trivia!
      <Input> </Input>
      <button onClick={() => setCorrectAnswer(48)}>
        Click for correct answer
      </button>
      {correctAnswer}
      <Question
        choices={[10, 78, 50, 19]}
        text={data[questionNumber]["question"]["text"]}
      />
      <NextQuestion />
    </div>
  );
}

// ### Goal 2: Render a "Next Question" button on the screen.

// - [ ] In App.jsx, create a NextQuestion component.
// - [ ] Write the JSX to display a button for the user to click for the next question. (It will not work yet.)
// - [ ] Render an instance of `<NextQuestion />` inside of `<App />`.

export default App;
