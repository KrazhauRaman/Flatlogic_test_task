import * as Actions from '../../../RootReducer/actionConstants';

export function switchTaskCompleted(id) {
    return {
        type: Actions.SWITCH_TASK_COMPLETED,
        id: id,
    };
}

export function deleteTask(id) {
    return {
        type: Actions.DELETE_TASK,
        id: id,
    };
}