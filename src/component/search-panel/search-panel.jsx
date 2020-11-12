import React from 'react';

import './search-panel.scss';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    
    return <input
    className="form-control search-input"
    placeholder={searchText} 
    />
};

export default SearchPanel;