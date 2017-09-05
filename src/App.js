import { version } from 'inferno';
import './registerServiceWorker';
import './css/App.css';
import Tasks from './components/tasks';

function App(props) {
    return (
      <div onMouseUp={ dragEnd.bind(null, props) } onMouseMove={ drag.bind(null, props) } className="App">
          <Tasks model={ props.model } dispatch={ props.dispatch } />
      </div>
    );
}

function drag({ dispatch, model }, { x, y }) {
    const { drag } = model;
    if (drag.id && farEnough(drag.startPos, { x, y })) {
        dispatch("DRAG", { x, y });
    }
}

function farEnough(startPos, curPos) {
    const dx = startPos.x - curPos.x;
    const dy = startPos.y - curPos.y;
    return Math.sqrt(dx * dx + dy * dy) > 5;
}

function dragEnd({ dispatch, model }) {
    if (model.drag.enabled) {
        dispatch("DRAG_END");
    }
}

export default App;
