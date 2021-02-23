import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term)
    };

    return (
        <div className="search-bar ui">
            <form onSubmit={onSubmit} className="ui form search-bar">
                <div className="ui icon input search-bar-input">
                    <input
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                        type="text"
                    />
                </div>
            </form>
        </div>
    )
}


export default SearchBar;