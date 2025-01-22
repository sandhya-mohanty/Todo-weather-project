
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [isOutdoor, setIsOutdoor] = useState(false);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError('Please enter a task description');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      task: task.trim(),
      priority,
      isOutdoor,
      location: isOutdoor ? location : null,
    };

    dispatch(addTask(newTask));

    setTask('');
    setPriority('Medium');
    setIsOutdoor(false);
    setLocation('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="form-select"
        >
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isOutdoor}
          onChange={(e) => setIsOutdoor(e.target.checked)}
        />
        <label className="form-check-label">Outdoor Activity</label>
      </div>
      {isOutdoor && (
        <div className="mb-3">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location (e.g., New York)"
            className="form-control"
          />
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      <button type="submit" className="btn btn-primary w-100">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
