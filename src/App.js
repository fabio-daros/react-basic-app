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

  addComment = () => {
    console.log("Adding comment...");

    const newComment = {
      name: "Mary",
      email: "mary@mail.com",
      date: new Date(),
      message: "Hello, I'm Mary!"
  }
  
    this.setState({
      comments: [...this.state.comments, newComment] // Spread operator to add new item in the existing array.
    });
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


        <button onClick={this.addComment}>Add comment</button>
      </div>
    );
  }
}

export default App;
