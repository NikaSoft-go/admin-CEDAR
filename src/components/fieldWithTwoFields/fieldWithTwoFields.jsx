import {useEffect, useState} from 'react';
import {scanningSensitivity} from "../../utils/data.js";
import {FiTrash2} from "react-icons/fi";

const FieldWithTwoFields = ({setData}) => {
    const [items, setItems] = useState(scanningSensitivity);

    const addItem = () => {
        setItems((prevItems) => [
            ...prevItems,
            {
                id: prevItems.length + 1,
                value1: '',
                value2: '',
            },
        ]);
    };

    const handleInputChange = (id, value) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? {...item, [id]: value} : item
            )
        );
    };

    const deleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    useEffect(() => {
        setData(items);
    }, [items]);

    return (
        <div className="my-8 p-4">
            <form>
                {items.map((item, index) => (
                    <div className={"flex space-x-4 w-full"} key={index}>
                        {/* Input for value1 */}
                        <div className="mb-4 w-full">
                            <input
                                type="text"
                                value={item.value1}
                                placeholder={"degree"}
                                onChange={(e) => handleInputChange(item.value1, e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>

                        {/* Input for value2 */}
                        <div className="mb-4 w-full">
                            <input
                                type="text"
                                value={item.value2}
                                placeholder={"dB"}
                                onChange={(e) => handleInputChange(item.value2, e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>

                        {/* Delete button */}
                        <div className="mb-4 flex items-center justify-center">
                            <button
                                type="button"
                                className="remove-btn rounded p-1 bg-red-500 text-white hover:bg-red-600 transition-colors"
                                onClick={() => deleteItem(item.id)}
                            >
                                <FiTrash2/>
                            </button>
                        </div>
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

export default FieldWithTwoFields;
