import React from 'react';
import { ResetIcon } from '../../assets/icons';

type SearchPanel = {
    searchText: string;
    setSearchText: (text: string) => void;
};

const SearchPanel: React.FC<SearchPanel> = ({ searchText, setSearchText }) => {
    return (
        <div className="search-inner">
            <input
                className="search-panel"
                type="text"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            <button className="search-btn" onClick={() => setSearchText('')}>
                <ResetIcon className="icon" />
            </button>
        </div>
    );
};

export default SearchPanel;
