import R from 'ramda';
import Task from './task';

function Tasks(props) {
    const tasks = getTasks(props);
    return (
        <div className="tasks">{ tasks }</div>
    );
}

function getTasks(props) {
    return R.compose(
        R.values,
        R.mapObjIndexed(mapToScopedTasks.bind(null, props.dispatch)),
        R.ifElse(
            () => Boolean(props.model.drag.enabled),
            R.merge({
                "year": [],
                "month": [],
                "week": [],
                "day": []
            }),
            R.identity
        ),
        R.groupBy(R.prop("timeScope"))
    )(props.model.tasks);
}

function mapToScopedTasks(dispatch, group, timeScope) {
    return (
        <div className={ timeScope }>
            <h2 className="time-scope-title">{ timeScope }</h2>
            { group.map(mapToTask.bind(null, dispatch)) }
        </div>
    );
}

function mapToTask(dispatch, task) {
    return <Task task={ task } dispatch={ dispatch }/>;
}

export default Tasks;
