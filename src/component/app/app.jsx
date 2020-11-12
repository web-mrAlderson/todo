import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';


import './app.scss';

const App = () => {

    const todoDeta = [
        {
            label: 'Drink Coffee',
            important: false,
            id: 1,
        },
        {
            label: 'Build React App',
            important: true,
            id: 2,
        },
        {
            label: 'Make Awesome App',
            important: false,
            id: 3,
        },
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoDeta} />
        </div>
    )
}

export default App;
