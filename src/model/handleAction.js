import {
    toggleComplete,
    dragStart,
    drag,
    dragEnd
} from './actionHandlers';

import {
    log
} from './sideEffects';

const actionMap = {
    "TOGGLE_COMPLETE": [toggleComplete, log],
    "DRAG_START": [dragStart, log],
    "DRAG": [drag, log],
    "DRAG_END": [dragEnd, log],
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
