import React from "react";
import Answer from "../Answer/Answer";
export default function Question(props) {
  return (
    <div>
      <div>{props.text}</div>
      {props.choices.map((choice) => (
        <Answer> {choice} </Answer>
      ))}
    </div>
  );
}
