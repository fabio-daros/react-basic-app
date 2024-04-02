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

  removeComment = comment => {  // Interaction with the state. It is a method that receives a comment as an argument and removes it from the state.
    let list = this.state.comments;
    list = list.filter(c => c !== comment);
    this.setState({ comments: list });
  }

  InputHandler = event => { // Every time the input changes, the state is updated.
    const { name, value } = event.target;
    this.setState({ newComment: { ...this.state.newComment, [name]: value } })
  }

  render() {
    return (
      <div className="App">
        <h1>React app - Comments</h1>

        {this.state.comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            email={comment.email}
            date={comment.date}
            onRemove={this.removeComment.bind(this, comment)}>
            {comment.message}
          </Comment>
        ))}

        <form method='post' onSubmit={this.addComment} className="New-Comment">
          <h2>Add a comment</h2>
          <div>
            <input
              type='text'
              name='name'
              onChange={this.InputHandler}  // Every time the input changes, the state is updated.
              required
              value={this.state.newComment.name}
              placeholder='Name' />
          </div>
          <div>
            <input
              type='email'
              name='email'
              onChange={this.InputHandler}  // Every time the input changes, the state is updated.
              value={this.state.newComment.email}
              required
              placeholder='Email' />
          </div>
          <div>
            <textarea
              name='message'
              onChange={this.InputHandler}  // Every time the input changes, the state is updated.
              value={this.state.newComment.message}
              rows="4"
              required>
            </textarea>
          </div>
          <button type='submit'>Comment</button>
        </form>
      </div>
    );
  }
}

export default App;
