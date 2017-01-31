var React = require('react'),
ReactBootstrap = require("react-bootstrap");
var QuizStore = require('../stores/QuizStore');
var QuizActions = require('../actions/QuizActions');

var Quiz = React.createClass({
  getInitialState() {
    return QuizStore.getState();
  },

  componentDidMount() {
    QuizStore.fetchVerbs();
    QuizStore.listen(this.onChange);
  },

  componentWillUnmount() {
    QuizStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    console.log(this.state.idx);
    console.log("loaded");
    console.log(this.state.is_loaded);
    console.log(this.state.verbs);
    console.log(this.state.verbs[this.state.idx]);
    if (this.state.is_loaded) {
      return (

    <div>
    <div>{this.state.idx}</div> 
    <div>{this.state.verbs[this.state.idx].infinitive}</div>
    <ReactBootstrap.Button bsStyle="success" onClick={this.onNextQuestion}>Next Question</ReactBootstrap.Button>
    <ReactBootstrap.Button bsStyle="success" onClick={this.onFlipQuestion}>Flip Question</ReactBootstrap.Button>
    </div>
    );
    }
    else {
      return (

      <div>
      {this.state.idx}
    <ReactBootstrap.Button bsStyle="success" onClick={this.onNextQuestion}>Next Question</ReactBootstrap.Button>
    <ReactBootstrap.Button bsStyle="success" onClick={this.onFlipQuestion}>Flip Question</ReactBootstrap.Button>
    </div>
    )
    }
    
  
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
