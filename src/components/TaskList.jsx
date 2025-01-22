
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/taskActions';
import WeatherDisplay from './WeatherDisplay';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks || []);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      {tasks.length > 0 ? (
        <div className="list-group ">
          {tasks.map((task) => (
            <div key={task.id} className="list-group-item d-flex justify-content-between align-items-center  ">
              <div>
                <h5 className="mb-1">{task.task}</h5>
                <span
                      className={`badge bg-${
                        task.priority === 'High'
                          ? 'danger'
                          : task.priority === 'Medium'
                          ? 'warning'
                          : 'success'
                      } {task.priority.toLowerCase()} me-2`}
                    >
                      {task.priority}
                    </span>
                {/* <small className={`badge bg-${task.priority.toLowerCase()} text-light me-2`}>
                  {task.priority}
                </small> */}
                {task.isOutdoor && (
                  <small className="badge bg-secondary">📍 {task.location}</small>
                )}
                {task.isOutdoor && task.location && (
                  <WeatherDisplay location={task.location} />
                )}
              </div>
              <button
                onClick={() => handleDelete(task.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning text-center">No tasks yet. Add some tasks to get started!</div>
      )}
    </div>
  );
};

export default TaskList;










