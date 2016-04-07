import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Mike'
            },
            {
              id: 'b',
              text: 'Tim'
            },
            {
              id: 'c',
              text: 'Dave'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is your mothers name?',
          choices: [
            {
              id: 'a',
              text: 'Sarah'
            },
            {
              id: 'b',
              text: 'Donna'
            },
            {
              id: 'c',
              text: 'Sue'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is your sisters name?',
          choices: [
            {
              id: 'a',
              text: 'Joyce'
            },
            {
              id: 'b',
              text: 'Gail'
            },
            {
              id: 'c',
              text: 'Joy'
            }
          ],
          correct: 'c'
        },
        {
          id: 4,
          text: 'What is your freinds name?',
          choices: [
            {
              id: 'a',
              text: 'Ben'
            },
            {
              id: 'b',
              text: 'Paul'
            },
            {
              id: 'c',
              text: 'Jose'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current){
    this.setState({current});
  }

  setScore(score){
    this.setState({score});
  }

  render() {
    if(this.state.current > this.state.questions.length) {
      var scorebox = '';
      var results = <Results {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />;
    } else {
      var scorebox = <Scorebox {...this.state} />;
      var results = '';
    }

    return(
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {results}
      </div>
    )
  };
};

export default App;