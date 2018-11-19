import React, { Component } from 'react';
import { connect } from 'react-redux';
import './newTask.css';

import { switchNewTaskVisibility, createTask, increaceIdCounter } from './Reducer/actions';

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            date: new Date(),
            priority: "",
            description: "",
        };

        this.nameInput = React.createRef();
    }

    componentDidMount() {
        this.startTimer();
        this.nameInput.current.focus();
    }

    //Если пользователь закрыл окно, то при следующем открытии после апдейта компонента фокус выставится на вводе имени
    componentDidUpdate(nextProps) {
        if (!nextProps.isVisible) {
            if (this.props.isVisible) {
                setTimeout(() => this.nameInput.current.focus(), 100);
            }
        };
    }

    //Таймер для часов на форме создания таска
    startTimer() {
        this.props.isVisible && this.setState({
            date: new Date(),
        });
        setTimeout(this.startTimer.bind(this), 1000);
    }

    //Отмена закрытия формы создания таска при клике не на окружающую область
    cancelPropagation(event) {
        event.stopPropagation();
    }

    //Набор обработчиков изменений полей формы созданяи таска
    changeName(event) {
        this.setState({
            name: event.currentTarget.value,
        });
    }

    changeDescription(event) {
        this.setState({
            description: event.currentTarget.value,
        });
    }

    changePriority(event) {
        this.setState({
            priority: event.currentTarget.dataset.value,
        });
    }

    //При закрытии данные сбрасыватся через пол секунды, чтобы форма успела заехать за край экрана
    closeNewTaskWindow() {
        this.props.switchNewTaskVisibility();
        setTimeout(() => {
            this.setState({
                name: "",
                priority: "",
                description: "",
            })
        }, 500);
    }

    //Создание нового таска, отправка его в стор, закрытие формы
    createTask() {
        const { name, date, priority, description } = this.state,
            { id, sendTaskToStore, increaceIdCounter } = this.props;

        if (name && priority && description) {
            const newTask = {
                id: id,
                name: name,
                date: date,
                priority: priority,
                description: description,
                completed: false,
            };

            sendTaskToStore(newTask);
            increaceIdCounter();
            this.closeNewTaskWindow();
        };
    }


    render() {
        const { isVisible } = this.props,
            { name, date, priority, description } = this.state;
        return (
            <div className={`${(isVisible) ? "new-task-overlay active" : "new-task-overlay"}`} onClick={this.closeNewTaskWindow.bind(this)}>
                <section className={`${(isVisible) ? "modal-dialog new-task-window appear" : "modal-dialog new-task-window"}`} onClick={this.cancelPropagation}>
                    <div className="modal-content new-task-window-content">
                        <div className={"modal-header"}>
                            <input className={`${(name) ? "form-control name-input done" : "form-control name-input error"}`} type="text"
                                placeholder="Add task name" value={name} onChange={(event) => this.changeName(event)} ref={this.nameInput} />
                            <div className="dropdown">
                                <button className={`${(priority) ? "btn dropdown-btn btn-outline-success done" : "btn btn-secondary dropdown-btn error"}`}>
                                    {(priority) ? priority : "Set priority"}
                                </button>
                                <div className="dropdown-content">
                                    <div data-value="High" onClick={(event) => this.changePriority(event)}>High</div>
                                    <div data-value="Medium" onClick={(event) => this.changePriority(event)}>Medium</div>
                                    <div data-value="Low" onClick={(event) => this.changePriority(event)}>Low</div>
                                </div>
                            </div>
                            <div className="new-task-time">
                                <h5>Time of creation</h5>
                                <time dateTime={date}>{date.toLocaleDateString() + " " + date.toLocaleTimeString()}</time>
                            </div>
                            <button className="btn btn-danger" onClick={this.closeNewTaskWindow.bind(this)}>Cancel</button>
                        </div>
                        <div className="modal-body">
                            <textarea className={`${(description) ? "form-control new-task-desc done" : "form-control new-task-desc error"}`}
                                placeholder="Add task description" value={description} onChange={(event) => this.changeDescription(event)}>
                            </textarea>
                        </div>
                        <div className="modal-footer">
                            <button className={!(name && priority && description) ? "btn btn-warning" : "btn btn-success"}
                                disabled={!(name && priority && description)}
                                onClick={this.createTask.bind(this)}>
                                Create
                        </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


/////////////// store //////////////

const getDataFromStore = store => ({
    isVisible: store.NewTask.isVisible,
    id: store.NewTask.currentIdCounter,
});

const setDataToStore = dispatch => ({
    switchNewTaskVisibility: () => dispatch(switchNewTaskVisibility()),
    sendTaskToStore: (newTask) => dispatch(createTask(newTask)),
    increaceIdCounter: () => dispatch(increaceIdCounter()),
});

export default connect(getDataFromStore, setDataToStore)(NewTask);