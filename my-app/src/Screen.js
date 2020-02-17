import ReactDOM from "react-dom";
import React from "react";

class TodoItem extends React.Component {
  state = {
    strike: false
  };

  strikeTask = () => {
    this.setState({
      strike: !this.state.strike
    });
  };

  render() {
    const { strike } = this.state;
    return (
      <li>
        {" "}
        {strike ? <strike>{this.props.text}</strike> : this.props.text}
        <button style={{ marginLeft: "10px" }} onClick={this.props.removeTask}>
          Remove
        </button>
        <button onClick={this.strikeTask}>complete</button>
      </li>
    );
  }
}

/* InputTaskForm renders a form, and returns the input to our storeTask method. */
const InputTaskForm = ({ task }) => {
  return (
    <form name="charlie" onSubmit={task}>
      <input name="userinput" type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

const DisplayTasks = ({ tasks, removeTask, strikeTask }) => {
  return (
    <ol>
      {tasks.map((task, index) => (
        <TodoItem text={task} removeTask={() => removeTask(index)} />
      ))}
    </ol>
  );
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userinput: "",
      tasksarray: []
    };
  }

  storeTask = event => {
    event.preventDefault();
    this.setState({
      userinput: event.target.userinput.value,
      tasksarray: this.state.tasksarray.concat(
        " " + event.target.userinput.value
      )
    });
    document.forms["charlie"].reset();
  };

  removeTask = index => {
    let r = window.confirm("Are you sure ?");
    if (r === true) {
      const removedTasksArray = [...this.state.tasksarray];
      removedTasksArray.splice(index, 1);
      this.setState({ tasksarray: removedTasksArray });
    } else {
    }
  };

  strikeTask = index => {
    const string = document.getElementById(index).childNodes[1].data;
    string.strike();
  };

  render() {
    const { tasksarray } = this.state;
    return (
      <div>
        <InputTaskForm task={this.storeTask} />
        <DisplayTasks
          tasks={tasksarray}
          removeTask={this.removeTask}
          strikeTask={this.strikeTask}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
