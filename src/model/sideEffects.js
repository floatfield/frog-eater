function log(model, dispatch) {
    console.log(model.toJS());
}

function emptyCmd() {}

export {
    log,
    emptyCmd
};
