import * as Actions from '../../../RootReducer/actionConstants';

// ################### task fields
//     id: id - number,
//     name: name - string,
//     date: date - Date(),
//     priority: priority - "High" / "Medium" / "Low"
//     description: description - string,
//     completed: true/false,

const initialState = {
    tasks: [],
};

export default function handle(state = initialState, action) {
    switch (action.type) {

        case Actions.CREATE_TASK:
            {
                const newTasks = [...state.tasks];
                newTasks.push(action.newTask);
                return {
                    ...state,
                    tasks: newTasks,
                };
            }

        case Actions.SWITCH_TASK_COMPLETED:
            {
                const newTasks = [...state.tasks];
                newTasks.find(task => task.id === action.id).completed = !(newTasks.find(task => task.id === action.id).completed);
                return {
                    ...state,
                    tasks: newTasks,
                };
            }

        case Actions.DELETE_TASK:
            {
                const newTasks = [...state.tasks];
                const elementPos = newTasks.map(task => task.id).indexOf(action.id);
                newTasks.splice(elementPos, 1);
                return {
                    ...state,
                    tasks: newTasks,
                };
            }

        default:
            return state;
    }
}