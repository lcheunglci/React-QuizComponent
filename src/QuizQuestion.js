import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

    handleClick(button_text) {
        if (button_text === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }

    render() {
        return <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
              {this.props.quiz_question.answer_options.map((answer_option, index) => {
                  return <QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)} />})} 
            //quiz question button logic goes here
          </ul>
        </section>
      </main>
    }


}

export default QuizQuestion;