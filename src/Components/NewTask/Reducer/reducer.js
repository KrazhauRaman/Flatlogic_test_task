import * as Actions from '../../../RootReducer/actionConstants';

const initialState = {
    isVisible: true,
    currentIdCounter: 0,
};

export default function handle(state = initialState, action) {
    switch (action.type) {    

        case Actions.SWITCH_NEW_TASK_VISIBILITY:
        {
            return {
                ...state,
                isVisible: !state.isVisible,
            };
        }
        
        case Actions.INCREACE_ID_COUNTER:
        {
            let newCounter = state.currentIdCounter;
            newCounter++;
            return {
                ...state,
                currentIdCounter: newCounter,
            };
        }
      
        default:
            return state;
    }
}