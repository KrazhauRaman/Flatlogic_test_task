import ListOfActiveTasks from '../Components/ListOfTasks/ListOfActiveTasks';
import React from 'react';

// Обе страницы одинаковы по структуре, поэтому обошелся одним компонентом, но прикрученным к роутингу
export const ActiveTasks = () => <ListOfActiveTasks listType="active" />;
export const CompletedTasks = () => <ListOfActiveTasks listType="completed" />;