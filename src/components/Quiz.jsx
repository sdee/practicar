var React = require('react');
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
    </div>
    );
  }
});

module.exports = Quiz;
