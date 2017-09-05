function Task(props) {
    const { task, dispatch } = props;
    const checked = task.completedAt ? "checked" : "";
    const dragClass = task.dragging ? "dragging" : "";
    const classes = `task ${dragClass}`;
    return (
        <div onMouseDown={ startDragging.bind(null, props) } className={ classes }>
            <h1>{ task.header }</h1>
            <p>{ task.description }</p>
            <input type="checkbox" checked={ checked } onChange={ toggleComplete.bind(null, props) }/>
        </div>
    );
}

function startDragging({ dispatch, task }, { x, y }) {
    dispatch("DRAG_START", {
        id: task.id,
        startPos: { x, y }
    });
}

function toggleComplete({ task, dispatch }) {
    dispatch("TOGGLE_COMPLETE", { id: task.id });
}

export default Task;
