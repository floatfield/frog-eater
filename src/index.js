import { render } from 'inferno';
import App from './App';
import './index.css';
import handleAction from './model/handleAction';
import initialConfig from './model/initialConfig';
import Immutable from 'immutable';

const initialModel = Immutable.fromJS(initialConfig);

const dispatch = function(currentModel, action, payload) {
    const { model, cmd } = handleAction(currentModel, action, payload);
    renderApp(model);
    cmd(model, dispatch);
};

function renderApp(model) {
    render(<App model={ model.toJS() } dispatch={ dispatch.bind(null, model) } />, document.getElementById('app'));
}

renderApp(initialModel);
