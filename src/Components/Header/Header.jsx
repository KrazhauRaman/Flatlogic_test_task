import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskListTypeSwitcer from './TaskListTypeSwitcer';
import Sorting from './Sorting';
import './header.css';
import { switchNewTaskVisibility, setSortingByTime } from './Reducer/actions';


class Header extends Component {
    constructor(props) {
        super(props);
        this.pageSwitchCallBack = this.pageSwitchCallBack.bind(this);
    }

    //Коллбэк для обновления компоненты при смене адреса
    pageSwitchCallBack() {
        this.forceUpdate();
    }

    render() {
        const { switchNewTaskVisibility, setSortingByTime, sorting } = this.props,
            { sortByTime, directionUp } = sorting;
        return (
            <header className="navbar navbar-expand-lg navbar-light bg-light header">
            <div className="header-wrapper">
                <button className="btn btn-success" onClick={switchNewTaskVisibility}>Add new task</button>
                <TaskListTypeSwitcer pageSwitchCallBack={this.pageSwitchCallBack} />
                <Sorting sortByTime={sortByTime} directionUp={directionUp} setSortingByTime={setSortingByTime} />
                </div>
            </header>
        );
    }
}


/////////////// store //////////////

const getDataFromStore = store => ({
    sorting: store.Header.sorting,
});

const setDataToStore = dispatch => ({
    switchNewTaskVisibility: () => dispatch(switchNewTaskVisibility()),
    setSortingByTime: sortByTime => dispatch(setSortingByTime(sortByTime)),
});

export default connect(getDataFromStore, setDataToStore)(Header);