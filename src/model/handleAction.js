import {
    toggleComplete
} from './actionHandlers';

import {
    log
} from './sideEffects';

const actionMap = {
    "TOGGLE_COMPLETE": [toggleComplete, log]
};

function handleAction(currentModel, action, payload) {
    // console.log(actionMap[action]);
    return actionMap[action] ?
        {
            model: actionMap[action][0](currentModel, payload),
            cmd: actionMap[action][1]
        } :
        {
            model: currentModel,
            cmd: () => {}
        };
}

export default handleAction;
