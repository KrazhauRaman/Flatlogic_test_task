import * as Actions from '../../../RootReducer/actionConstants';

export function switchNewTaskVisibility() {
    return {
        type: Actions.SWITCH_NEW_TASK_VISIBILITY,
    };
}

export function createTask(newTask) {
    return {
        type: Actions.CREATE_TASK,
        newTask: newTask,
    };
}

export function increaceIdCounter() {
    return {
        type: Actions.INCREACE_ID_COUNTER,
    };
}