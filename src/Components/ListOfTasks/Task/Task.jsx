import React from 'react';
import './task.css';

const Task = ({ id, name, date, priority, description, completed, switchTaskCompleted, deleteTask }) =>
    <section className="card border-secondary mb-3 task-item">
        <div className="completed">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="isCompleted" checked={completed}
                    onChange={() => switchTaskCompleted(id)} />
                <label className="custom-control-label" htmlFor="isCompleted">Completed</label>
            </div>
        </div>
        <div className="task-info">
            <h3>Name: {name}</h3>
            <div className="task-info-date-prio">
                <h4>Created: <time dateTime={date}>{date.toLocaleDateString() + " " + date.toLocaleTimeString()}</time></h4>
                <h4>&nbsp;&nbsp;&nbsp;Priority: {priority}</h4>
            </div>
            <div className="task-description-wrapper">
                <textarea className="task-description" defaultValue={description} disabled />
            </div>
        </div>
        <div className="delete-task">
            <button className="btn btn-danger" onClick={() => deleteTask(id)}><i className="fas fa-trash-alt"></i></button>
        </div>
    </section>

export default Task;