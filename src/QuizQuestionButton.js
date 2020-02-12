import React, { component, Component } from "react";

class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
        <button>{this.props.QuizQuestionButton}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
