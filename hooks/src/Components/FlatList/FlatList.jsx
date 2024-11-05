
// Create a FlatList with some list of items. Where, by default all the cards are of green colour and on click of a card just that card turns red and remaining cards stay as green.

import React, { useState } from 'react';
import './FlatList.css'; // Make sure to create this CSS file for styling

const FlatList = () => {
    const [selectedId, setSelectedId] = useState(null);

    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 5' },
    ];

    const renderItem = (item) => {
        const backgroundColor = item.id === selectedId ? 'red' : 'green';

        return (
            <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className="card"
                style={{ backgroundColor }}
            >
                {item.title}
            </div>
        );
    };

    return (
        <div className="container">
            {DATA.map(renderItem)}
        </div>
    );
};

export default FlatList;