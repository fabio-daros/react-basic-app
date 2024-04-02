import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';

class App extends Component {

  state = {               // Stateful component or smart component. It is a class that extends Component and has a state object.
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
    ],
    newComment: {
      name: "",
      email: "",
      message: ""
    }
  }

  addComment = event => {
    event.preventDefault();

    console.log("Adding comment...");

    const newComment = { ...this.state.newComment, date: new Date() };
    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: { name: "", email: "", message: "" } // Clear the form after adding the comment.
    });
  }

  InputHandler = event => { // Every time the input changes, the state is updated.
    const { name, value } = event.target;
    this.setState({ newComment: { ...this.state.newComment, [name]: value } })
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

        <form method='post' onSubmit={this.addComment}>
          <h2>Add a comment</h2>
          <div>
            <input
              type='text'
              name='name'
              onChange={this.InputHandler}  // Every time the input changes, the state is updated.
              value={this.state.newComment.name}
              placeholder='Name' />
          </div>
          <div>
            <input
              type='email'
              name='email'
              onChange={this.InputHandler}  // Every time the input changes, the state is updated.
              value={this.state.newComment.email}
              placeholder='Email' />
          </div>
          <div>
            <textarea
              name='message'
              onChange={this.InputHandler}  // Every time the input changes, the state is updated.
              value={this.state.newComment.message}
              rows="4">
            </textarea>
          </div>
          <button type='submit'>Comment</button>
        </form>
      </div>
    );
  }
}

export default App;
