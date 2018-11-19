import React from 'react';

const Sorting = ({ setSortingByTime, sortByTime, directionUp }) =>
    <div className="sorting-elements">
        <h2>Sort by:&nbsp;</h2>        
        <h2 className={(sortByTime) ? "sorting-switcher active-switcher" : "sorting-switcher"} onClick={() => setSortingByTime(true)}>
            time{(sortByTime) ? (directionUp) ? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" /> : ""}
        </h2>
        <h2>&nbsp;or&nbsp;</h2>
        <h2 className={(!sortByTime) ? "sorting-switcher active-switcher" : "sorting-switcher"} onClick={() => setSortingByTime(false)}>
            priority{(!sortByTime) ? (directionUp) ? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" /> : ""}
        </h2>
    </div>

export default Sorting;