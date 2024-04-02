import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';

class App extends Component {

  state = { // Stateful component or smart component. It is a class that extends Component and has a state object.
    comments: [
      {
        name: "John",
        email: "john@mail.com",
        date: new Date(2024, 4, 2),
        message: "Hello, how are you?"
      },
      {
        name: "Peter",
        email: "peter@mail.com",
        date: new Date(2024, 4, 3),
        message: "Hello, I'm fine, thank you!"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>

        {this.state.comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            email={comment.email}
            date={comment.date}>
            {comment.message}
          </Comment>
        ))}
      </div>
    );
  }
}

export default App;
