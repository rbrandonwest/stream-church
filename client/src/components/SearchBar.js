import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term)
    };

    return (
        <div className="search-bar item">
            <form onSubmit={onSubmit} className="ui form search-bar">
                <div className="ui icon input search-bar-input">
                    <input
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                        type="text"
                        style={{width: '500px'}}
                    />
                    <i className="search link icon" />
                </div>
            </form>
        </div>
    )
}


export default SearchBar;