import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './component/app-header/app-header';
import SearchPanel from './component/search-panel/search-panel';
import TodoList from './component/todo-list/todo-list';

import './style/app.scss';





const App = () => {

    const todoDeta = [
        {
            label: 'Drink Coffee',
            important: false,
            id:1,
        },
        {
            label: 'Build React App',
            important: true,
            id:2,
        },
        {
            label: 'Make Awesome App',
            important: false,
            id:3,
        },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoDeta} />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));