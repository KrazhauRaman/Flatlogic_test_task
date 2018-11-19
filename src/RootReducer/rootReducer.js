import { combineReducers } from 'redux';

import Header from '../Components/Header/Reducer/reducer';
import ListOfTasks from '../Components/ListOfTasks/Reducer/reducer';
import NewTask from '../Components/NewTask/Reducer/reducer';

export default combineReducers({
    Header,
    ListOfTasks,
    NewTask
});