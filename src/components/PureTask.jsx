import React from "react";

// source:
// https://www.tutorialspoint.com/pure-component-in-react-js#

class PureTasks extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        { title: "excercise" },
        { title: "cooking" },
        { title: "Reacting" },
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((oldState) => {
        return { taskList: [...oldState.taskList] };
      });
    }, 1000);
  }

  render() {
    console.log("taskList render called");
    return (
      <div>
        {this.state.taskList.map((task, i) => {
          return <PureTask key={i} title={task.title} />;
        })}
      </div>
    );
  }
}

class PureTask extends React.PureComponent {
  render() {
    console.log("task added");
    return <div>{this.props.title}</div>;
  }
}

export default PureTasks;
