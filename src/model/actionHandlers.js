import R from "ramda";

function toggleComplete(model, { id }) {
    const index = findIndexById(model, id);
    return index === -1 ?
        model :
        model.updateIn(["tasks", index, "completedAt"], completedAt => {
            return completedAt ? null : new Date();
        });
}

function findIndexById(model, id) {
    return model.get("tasks").findIndex(task => task.get("id") === id);
}

function dragStart(model, { id, startPos }) {
    return R.compose(
        setIn(["drag", "id"], id),
        setIn(["drag", "startPos"], startPos),
    )(model);
}

function drag(model, mousePos) {
    const index = findIndexById(model, model.getIn(["drag", "id"]));
    return R.compose(
        setIn(["drag", "mousePos"], mousePos),
        setIn(["drag", "enabled"], true),
        setIn(["tasks", index, "dragging"], true),
    )(model);
}

function dragEnd(model) {
    const index = findIndexById(model, model.getIn(["drag", "id"]));
    return R.compose(
        setIn(["drag", "enabled"], false),
        setIn(["drag", "id"], null),
        deleteIn(["tasks", index, "dragging"]),
    )(model);
}

const setIn = R.invoker(2, "setIn");
const deleteIn = R.invoker(1, "setIn");


export {
    toggleComplete,
    dragStart,
    drag,
    dragEnd
};
