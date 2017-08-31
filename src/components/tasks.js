import Task from './task';

function Tasks(props) {
    const yearTasks = props.tasks.filter(isYear).map(mapToTask.bind(null, props.dispatch));
    const monthTasks = props.tasks.filter(isMonth).map(mapToTask.bind(null, props.dispatch));
    return (
        <div className="tasks">
            <div className="year">{ yearTasks }</div>
            <div className="month">{ monthTasks }</div>
        </div>
    );
}

function isYear(task) {
    return task.timeScope === "year";
}

function isMonth(task) {
    return task.timeScope === "month";
}

function mapToTask(dispatch, task) {
    return <Task task={ task } dispatch={ dispatch }/>;
}

export default Tasks;
