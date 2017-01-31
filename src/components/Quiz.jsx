var React = require('react'),
ReactBootstrap = require("react-bootstrap");
var QuizStore = require('../stores/QuizStore');
var QuizActions = require('../actions/QuizActions');

var Quiz = React.createClass({
  getInitialState() {
    return QuizStore.getState();
  },

  componentDidMount() {
    QuizStore.listen(this.onChange);
  },

  componentWillUnmount() {
    QuizStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    return (
    <div>
    <b>{this.state.idx}</b>
    <ReactBootstrap.Button bsStyle="success" onClick={this.onNextQuestion}>Next Question</ReactBootstrap.Button>
    <ReactBootstrap.Button bsStyle="success" onClick={this.onFlipQuestion}>Flip Question</ReactBootstrap.Button>
    </div>
    );
  },
   onNextQuestion (){
      QuizActions.nextQuestion();
      console.log("Button Next Question");

    },
    onFlipQuestion (){
      console.log("Flip Question");
    }
});

module.exports = Quiz;
