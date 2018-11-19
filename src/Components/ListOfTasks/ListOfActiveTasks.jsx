import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task/Task';
import './listOfTasks.css';
import { switchTaskCompleted, deleteTask } from './Reducer/actions';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class ListOfActiveTasks extends Component {

    //Применение к списку тасков фильтра по выполненности, а потом сортировка
    generateTaskList() {
        const { tasksForDisplay, listType, sorting } = this.props,
            { sortByTime, directionUp } = sorting;
        let filteredTasksForDisplay;

        filteredTasksForDisplay = tasksForDisplay.filter(task => (task.completed === ((listType === "active") ? false : true)));

        if (sortByTime) {
            (directionUp)
                ? filteredTasksForDisplay.sort((a, b) => { return a.id - b.id })
                : filteredTasksForDisplay.sort((a, b) => { return b.id - a.id });
        }
        else {
            (directionUp)
                ? filteredTasksForDisplay.sort((a, b) => { return this.checkPriority(a.priority) - this.checkPriority(b.priority) })
                : filteredTasksForDisplay.sort((a, b) => { return this.checkPriority(b.priority) - this.checkPriority(a.priority) })
        };

        return filteredTasksForDisplay;
    }

    //Перевод текста в численные условные значения, чтобы можно было отфильтровать
    checkPriority(item) {
        switch (item) {
            case "High": {
                return 2;
            }

            case "Medium": {
                return 1;
            }

            default: {
                return 0;
            }
        }
    }


    render() {
        const { switchTaskCompleted, deleteTask } = this.props;
        return (
            <main className="list-of-tasks">
                <CSSTransitionGroup /*Добавлена базовая анимация, чтобы таски не просто "пропадали" при удалении\переключении */
                    transitionName="moving-task-in-list"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {this.generateTaskList().map((task, i) => /*Из каждого таска в списке создаётся компонент, отображающий данные таска */
                        <Task key={i} {...task}
                            switchTaskCompleted={switchTaskCompleted}
                            deleteTask={deleteTask}
                        />
                    )}
                </CSSTransitionGroup>
            </main>
        );
    }
}


/////////////// store //////////////

const getDataFromStore = store => ({
    tasksForDisplay: store.ListOfTasks.tasks,
    sorting: store.Header.sorting,
});

const setDataToStore = dispatch => ({
    switchTaskCompleted: (id) => dispatch(switchTaskCompleted(id)),
    deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(getDataFromStore, setDataToStore)(ListOfActiveTasks);