var React = require('react'),
ReactBootstrap = require("react-bootstrap");
var QuizStore = require('../stores/QuizStore');

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
    </div>
    );
  },
   onNextQuestion (){
      console.log("Button Next Question");
    }
});

module.exports = Quiz;
