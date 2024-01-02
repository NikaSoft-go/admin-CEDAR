// src/components/IncrementalList.js

import {useEffect, useState} from 'react';
import {commentsInitial} from "../../utils/data.js";

const IncrementalList = ({ setComments }) => {
    const [items, setItems] = useState(commentsInitial);

    const addItem = () => {
        setItems((prevItems) => [
            ...prevItems,
            {
                id: prevItems.length + 1,
                value: '',
            },
        ]);
    };

    const handleInputChange = (id, value) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, value } : item
            )
        );
    };

    useEffect(() => {
        setComments(items);
    }, [items]);

    return (
        <div className="my-8 p-4">
            <form>
                {items.map((item) => (
                    <div key={item.id} className="mb-4">
                        <input
                            type="text"
                            value={item.value}
                            onChange={(e) => handleInputChange(item.id, e.target.value)}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                ))}
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={addItem}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
};

export default IncrementalList;
