import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="bg-light rounded-pill m-4">
        <h2>Date: {this.state.date.toDateString()}.</h2>
        <h2>Time: {this.state.date.toUTCString().split(" ")[4]}</h2>
      </div>
    );
  }
}
export default Clock;
