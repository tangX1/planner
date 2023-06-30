import React, { useState } from 'react';

const YouTubeSearchWidget = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`);
        setSearchQuery('');
    };

    return (
        <div>
            <h2>YouTube Search</h2>
            <form onSubmit={handleSearchSubmit} >
                <input type="text" value={searchQuery} onChange={handleSearchChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default YouTubeSearchWidget;
