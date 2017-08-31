function Task(props) {
    const { task, dispatch } = props;
    const checked = task.completedAt ? "checked" : "";
    return (
        <div className="task">
            <h1>{ task.header }</h1>
            <p>{ task.description }</p>
            <input type="checkbox" checked={ checked } onChange={ toggleComplete.bind(null, task.id, dispatch) }/>
        </div>
    );
}

function toggleComplete(id, dispatch) {
    dispatch("TOGGLE_COMPLETE", { id });
}

export default Task;
