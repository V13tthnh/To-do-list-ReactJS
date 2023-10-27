import { useDispatch, useSelector } from 'react-redux'
import { del } from '../reducers/task_slice';

export default function ListTasks() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.task.list); //lay data ra tu redux store

    const delTask = name => {
        dispatch(del(name));
    }

    return (
        <>
            <div className="list-tasks">
                <h3 className="mb-5">List of tasks:</h3>
                {
                    tasks.map((task, idx) => {
                        return (
                            <div className="task" key={idx}>
                                <p>{task}</p>
                                <button onClick={() => delTask(task)}>X</button>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

