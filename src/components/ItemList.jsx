import React from 'react';

const ItemList = () => {
    const items = [
        { id: 1, name: 'Научиться программировать на React' },
        { id: 2, name: 'Разработать проект на React' },
        { id: 3, name: 'Стать профессионалом в React' },
    ];

    return (
        <div>
            <h1>Список моих дел</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;