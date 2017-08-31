import { version } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import Tasks from './components/tasks';

function App(props) {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80" />
          <h2>{`Welcome to Inferno ${version}`}</h2>
        </div>
        <p className="App-intro">
          <Tasks tasks={ props.model } dispatch={ props.dispatch } />
        </p>
      </div>
    );
}

export default App;
