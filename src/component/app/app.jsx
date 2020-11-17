import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';


import './app.scss';

export default class App extends Component {

    maxId = 100;

    state = {
        todoDeta: [
            { label: 'Drink Coffee', important: false, id: 1, },
            { label: 'Build React App', important: true, id: 2, },
            { label: 'Make Awesome App', important: false, id: 3, },
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoDeta }) => {
            const idx = todoDeta.findIndex((el) => el.id === id);

            const newArray = [
                ...todoDeta.slice(0, idx),
                ...todoDeta.slice(idx + 1)
            ];

            return {
                todoDeta: newArray
            }
        });
    };

    addItem = (text) => {
        const { todoDeta } = this.state;

        const newItem = {
            label: 'Make Awesome 2',
            important: false,
            id: this.maxId++,
        };
        const newArray = [
            ...todoDeta,
            newItem
        ];
        this.setState(() => {
            return {
                todoDeta: newArray
            }
        });
    };


    render() {
        const { todoDeta } = this.state
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={todoDeta}
                    onDeleted={this.deleteItem}
                />
                <ItemAddForm
                    addItem={this.addItem}
                />
            </div>
        )
    }
};