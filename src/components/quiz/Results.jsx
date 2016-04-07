import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {

  onClick(e) {
    e.preventDefault();

    const {setCurrent, setScore} = this.props;
    setScore(0);
    setCurrent(1);
  }

  render() {
    var percent = (this.props.score / this.props.questions.length * 100);

    if (percent > 80) {
      var message = 'Awesome job!';
    } else {
      var message = 'Hmmm';
    }

    return(
      <div className="well">
        <h4>You scored {this.props.score} out of {this.props.questions.length}</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a onClick={this.onClick.bind(this)}>Retake the Test</a>
      </div>
    )
  }
};

export default Results;