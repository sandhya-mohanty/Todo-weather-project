import { ADD_TASK, REMOVE_TASK } from './taskActions';

const initialState = {
  tasks: [{
    id: '1',
    task: 'Morning Run in Central Park',
    priority: 'High',
    isOutdoor: true,
    location: 'New York',
  },
  {
    id: '2',
    task: 'Grocery Shopping',
    priority: 'Medium',
    isOutdoor: false,
  },],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
