import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Comment name="John" email="john@mail.com" date={new Date(2024, 4, 2)}>
        Hello, how are you?
      </Comment>

      <Comment name="Jane" email="jane@mail.com" date={new Date(2024, 4, 3)}>
        Hello, I'm fine, thank you!
      </Comment>
    </div>
  );
}

export default App;
