import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/* function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">About me</a>
      </nav>
    </header>
  );
} */

/* function StudentList(props) {
  return (
    <section className="studentlist">
      <Student name="Anders" email="a@kea.dk" />
      <Student name="Ida" email="i@kea.dk" />
      <Student name="Marie" email="m@kea.dk" />
    </section>
  );
}

function Student(props) {
  return (
    <article>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </article>
  );
} */

// build a to do list
// a container, pass props
// todo items
// statefull
/* 
class ToDoList extends React.Component {
  state = {
    item: ["Dishes", "Walk the dog", "KATAs"]
  };
  render() {
    return (
      <section className="to_do_list">
        <h1>To-Do:</h1>
        <ul>
          <ToDoItems name={this.state.item[0]} deadline="Today" time="15 min" />
          <ToDoItems name={this.state.item[1]} deadline="Today" time="30 min" />
          <ToDoItems name={this.state.item[2]} deadline="Today" time="8 hours" />
        </ul>
      </section>
    );
  }
} */
/* 
function ToDoList(props) {
  return (
    <section className="to_do_list">
      <h1>To-Do:</h1>
      <ul>
        <ToDoItems name="Dishes" deadline="Today" time="15 min" />
        <ToDoItems name="Walk the dog" deadline="Today" time="30 min" />
        <ToDoItems name="KATAs" deadline="Today" time="8 hours" />
      </ul>
    </section>
  );
}
 */
/* function ToDoItems(props) {
  return (
    <article>
      <li>
        {" "}
        <h2>{props.name}</h2>
      </li>
      <p>When: {props.deadline}</p>
      <p>Duration: {props.time}</p>
    </article>
  );
} */

// EXERCISE
//Create a stateful component called StudentList
//Give it a state containing a list of students
//Create a component called Student (stateless/functional)
//Hook the two up

class StudentList extends React.Component {
  state = {
    students: ["Laise", "Marie", "Pedro"]
  };

  render() {
    const newStudents = this.state.students.map(student => {
      return <TodoItem what={student} />;
    });
    return (
      <section>
        <ul>{newStudents}</ul>
      </section>
    );
  }
}
function TodoItem(props) {
  return <li>{props.what}</li>;
}

ReactDOM.render(<StudentList />, document.getElementById("root"));
