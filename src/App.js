import logo from './logo.svg';
import './App.css';
import useIterator from './useIterator';

function App() {
  const [userList, currentUser, prev, next] = useIterator('https://randomuser.me/api/')
  console.log('userList', userList)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type='button' onClick={() => next()}>Next</button>
        <button type='button' onClick={() => prev()}>Previous</button>
        {JSON.stringify(currentUser)}
      </header>
    </div>
  );
}

export default App;
