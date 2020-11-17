import React, { Component } from 'react';


import './item-add-form.scss';

export default class ItemAddForm extends Component {
    
render() {
    const { addItem } = this.props;
    
    return (
        <div className="item-add-form">
            <button
                className="btn btn-outline-secondary"
                onClick={addItem}
            >Add Element</button>
        </div>
    )
}
}