// Write a snippet to explain Debouncing

// How Debouncing Works

// When a debounced function is called, it resets a timer. 
//If the function is called again before the timer expires, 
//the previous timer is cleared, and a new one is set.
// The function will only execute when the timer finally expires without any further calls.


import React, { useState, useEffect } from 'react';

const DebouncedSearch = () => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300); // 300ms delay

        return () => {
            clearTimeout(handler); // Cleanup the timeout on unmount or query change
        };
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            <p>Debounced Query: {debouncedQuery}</p>
        </div>
    );
};

export default DebouncedSearch;