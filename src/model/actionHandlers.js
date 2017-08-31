function toggleComplete(model, { id }) {
    const index = findIndexById(model, id);
    return index === -1 ?
        model :
        model.updateIn([index, "completedAt"], completedAt => {
            return completedAt ? null : new Date();
        });
}

function findIndexById(model, id) {
    return model.findIndex(task => task.get("id") === id);
}

export {
    toggleComplete
};
