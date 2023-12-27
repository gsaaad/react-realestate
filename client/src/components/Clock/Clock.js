import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    // console.log(
    //   "this.state.date: ",
    //   this.state.date.toUTCString().split(" ")[4]
    // );
  }
  formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + ":" + seconds + " " + ampm;
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
      <div className="bg-light bg-gradient rounded m-4">
        <h2>{this.state.date.toDateString()}</h2>
        <h2>{this.formatTime(this.state.date)}</h2>
      </div>
    );
  }
}
export default Clock;
