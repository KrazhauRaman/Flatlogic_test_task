import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

const TaskListTypeSwitcer = ({ pageSwitchCallBack }) =>
  <nav> {console.log(document.location.hash)}
    <HashRouter>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link to="/active-tasks">
          <button type="button" className="btn btn-warning" onClick={pageSwitchCallBack}
            disabled={"#/active-tasks" === document.location.hash || "" === document.location.hash}>Active</button>
        </Link>
        <Link to="/completed-tasks">
          <button type="button" className="btn btn-warning" onClick={pageSwitchCallBack}
            disabled={"#/completed-tasks" === document.location.hash}>Completed</button>
        </Link>
      </div>
    </HashRouter>
  </nav>

export default TaskListTypeSwitcer;
